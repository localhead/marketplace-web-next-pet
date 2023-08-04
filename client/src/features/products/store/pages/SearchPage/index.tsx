import { GridAdaptive } from "@components/GridAdaptive";
import { Space } from "@components/Space";
import { ProductCard } from "@features/products/components/ProductCard";
import { AuthControlBadge } from "@features/user/components/AuthControlBadge";
import { MainLayout } from "@layouts/MainLayout";
import { Container } from "@layouts/MainLayout/pageContentComponents/Container";
import { getNoun } from "@utils/getNoun";
import { FC, useEffect, useState } from "react";
import { productsApi } from "../../apiService";
import { BoilerPartsRecord } from "../../types";
import {
  StyledSearchPage,
  StyledSearchResultsAmount,
  StyledSearchResultsContainer,
  StyledSearchResultsTitle,
} from "./styles";

export interface SearchPageProps {
  className?: string;
  style?: React.CSSProperties;

  searchText: string | string[] | undefined;
}

export const SearchPage: FC<SearchPageProps> = (props) => {
  const { searchText, ...restProps } = props;

  const [getBySearchTextM] = productsApi.useGetBySearchTextMutation();

  const [searchResults, setSearchResults] = useState<BoilerPartsRecord[]>([]);

  useEffect(() => {
    const fn = async (value: string | string[] | undefined) => {
      const data = await getBySearchTextM({
        search: value,
      }).unwrap();

      setSearchResults(data.rows);
    };
    fn(searchText);
  }, [getBySearchTextM, searchText]);

  console.log(searchResults);

  return (
    <StyledSearchPage>
      <MainLayout>
        <MainLayout.Content>
          <AuthControlBadge />
          <Container>
            <Space size={25} />
            <StyledSearchResultsContainer>
              <StyledSearchResultsTitle>
                {`Результаты поиска по запросу «${searchText}»`}{" "}
              </StyledSearchResultsTitle>
              <StyledSearchResultsAmount>
                {searchResults.length}{" "}
                {getNoun(searchResults.length, "товар", "товара", "товаров")}
              </StyledSearchResultsAmount>
            </StyledSearchResultsContainer>

            <Space size={25} />
            <GridAdaptive cols={5} columnGap={15} rowGap={25}>
              {searchResults.map((item) => {
                return <ProductCard key={item.id} data={item} />;
              })}
            </GridAdaptive>
          </Container>
          <Space size={150} />
        </MainLayout.Content>
      </MainLayout>
    </StyledSearchPage>
  );
};
