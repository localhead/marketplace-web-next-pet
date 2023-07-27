import { Form } from "@features/forms/components/Form";
import { productsApi } from "@features/products/store/apiService";
import { paths } from "@features/routering/paths";
import { Button } from "@packages/uiKit";
import useOutsideClick from "@packages/uiKit/utils/useOutsideClick";
import router from "next/router";
import { ParsedUrlQuery } from "querystring";
import { FC, memo, useCallback, useRef, useState } from "react";
import {
  StyledAutocompleteDropdown,
  StyledContainer,
  StyledInputContainer,
  StyledInputField,
  StyledLink,
  StyledMagnifyingGlassIcon,
  StyledRowItem,
} from "./styles";

interface HeaderSearchFormProps {
  className?: string;
  style?: React.CSSProperties;
}

export const _HeaderSearchForm: FC<HeaderSearchFormProps> = (props) => {
  const { ...restProps } = props;

  const [getBySearchTextM, { isLoading: isLoadingRegistration }] =
    productsApi.useGetBySearchTextMutation();

  const [searchText, setSearchText] = useState<string>("");
  const [searchOptions, setSearchOptions] = useState<
    {
      id: number;
      name: string;
    }[]
  >([{ id: 0, name: "" }]);

  // real time fetching
  const fn = async (value: string) => {
    const data = await getBySearchTextM({
      search: value,
    }).unwrap();

    const res = data.rows.map((item) => {
      return { id: item.id, name: item.name };
    });

    return res;
  };

  const handleOnChange = async (value: string) => {
    setSearchText(value);
    setIsVisible(true);

    const searchResults = await fn(value);

    setSearchOptions(searchResults);
  };

  //Outside click handler
  const selectRef = useRef<HTMLDivElement | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const [isVisible, setIsVisible] = useState(false);

  const handleClose = useCallback(() => {
    setIsVisible(false);
  }, []);

  useOutsideClick([selectRef, dropdownRef], handleClose, isVisible);

  console.log(isVisible);

  // setting that dropdown is invisible by the start
  // useEffect(() => {
  //   setIsVisible(searchOptions.length >= 0 ? true : false);
  // }, [searchOptions.length]);

  // behavior for glass click
  const submitHandler = () => {
    const params: ParsedUrlQuery = {
      searchText,
    };

    if (!searchText) {
      return;
    }

    const newQuery: ParsedUrlQuery =
      router.pathname === paths.searchProducts()
        ? {
            ...params,
          }
        : params;

    router.push({
      pathname: paths.searchProducts(),
      query: newQuery,
    });
  };

  return (
    <Form onSubmit={submitHandler}>
      <Form.Content>
        <StyledContainer>
          <StyledInputContainer>
            <StyledInputField
              size="small"
              variant="outlined"
              value={searchText}
              onChange={handleOnChange}
              right={
                <>
                  <StyledMagnifyingGlassIcon onClick={submitHandler} />
                </>
              }
            />
          </StyledInputContainer>
          {isVisible && searchOptions && (
            <StyledAutocompleteDropdown ref={selectRef}>
              {searchOptions
                .map((item, index) => {
                  return (
                    <StyledLink
                      key={index}
                      href={paths.productDetail(item.id)}
                      onClick={handleClose}
                    >
                      <StyledRowItem ref={dropdownRef}>
                        {item.name}
                      </StyledRowItem>
                    </StyledLink>
                  );
                })
                .concat([
                  <Button
                    size="small"
                    key={"last"}
                    variant="secondary-outlined"
                    onClick={submitHandler}
                  >
                    поиск по сайту
                  </Button>,
                ])}
            </StyledAutocompleteDropdown>
          )}
        </StyledContainer>
      </Form.Content>
    </Form>
  );
};

export const HeaderSearchForm = memo(_HeaderSearchForm);
