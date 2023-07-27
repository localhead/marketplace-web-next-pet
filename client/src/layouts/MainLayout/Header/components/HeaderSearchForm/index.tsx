import { Form } from "@features/forms/components/Form";
import { productsApi } from "@features/products/store/apiService";
import useOutsideClick from "@packages/uiKit/utils/useOutsideClick";
import { FC, memo, useCallback, useEffect, useRef, useState } from "react";
import {
  StyledAutocompleteDropdown,
  StyledContainer,
  StyledInputContainer,
  StyledInputField,
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

  const [searchText, setSearchText] = useState<string | null>(null);
  const [searchOptions, setSearchOptions] = useState<string[]>([]);

  // real time fetching
  const fn = async (value: string | null) => {
    const data = await getBySearchTextM({
      search: value,
    }).unwrap();

    const res = data.rows.map((item) => item.name);

    return res;
  };

  const handleOnChange = async (value: string | null) => {
    setSearchText(value);
    setIsVisible(true);

    const searchResults = await fn(value);

    setSearchOptions(searchResults);
  };

  //Outside click handler
  const selectRef = useRef<HTMLDivElement | null>(null);
  const dropdownRef = useRef<HTMLButtonElement | null>(null);

  const [isVisible, setIsVisible] = useState(false);

  const handleClose = useCallback(() => {
    setIsVisible(false);
  }, []);

  useOutsideClick([selectRef, dropdownRef], handleClose, isVisible);

  // setting that dropdown is invisible by the start
  useEffect(() => {
    setIsVisible(searchOptions.length > 0 ? true : false);
  }, [searchOptions.length]);

  const submitHandler = () => {
    alert("test");
  };

  return (
    <Form onSubmit={submitHandler}>
      <Form.Content>
        <StyledContainer>
          <StyledInputContainer>
            <StyledInputField
              value={searchText}
              onChange={handleOnChange}
              right={
                <>
                  <StyledMagnifyingGlassIcon onClick={submitHandler} />
                </>
              }
            />
          </StyledInputContainer>
          {isVisible && (
            <StyledAutocompleteDropdown ref={selectRef}>
              {searchOptions.map((item, index) => {
                return (
                  <StyledRowItem ref={dropdownRef} type={"submit"} key={index}>
                    {item}
                  </StyledRowItem>
                );
              })}
            </StyledAutocompleteDropdown>
          )}
        </StyledContainer>
      </Form.Content>
    </Form>
  );
};

export const HeaderSearchForm = memo(_HeaderSearchForm);
