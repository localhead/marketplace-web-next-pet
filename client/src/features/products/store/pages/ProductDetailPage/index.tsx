import { StyledTestContent } from "@features/main/pages/MainPage/style";

import { StyledPriceTitle } from "@features/products/components/ProductCard/styles";
import { AuthControlBadge } from "@features/user/components/AuthControlBadge";
import { MainLayout } from "@layouts/MainLayout";
import { Container } from "@layouts/MainLayout/pageContentComponents/Container";
import { toCurrency } from "@utils/formatToLocaleString";
import { FC } from "react";
import { productsApi } from "../../apiService";
import { StyledImage } from "./styles";

export interface ProductDetailPageProps {
  className?: string;
  style?: React.CSSProperties;

  idNumber: number;
}

export const ProductDetailPage: FC<ProductDetailPageProps> = (props) => {
  const { idNumber, ...restProps } = props;

  const { data, isSuccess } = productsApi.useGetFindByIdQuery({
    search: String(idNumber),
  });

  //debugger;
  console.log(data);

  const urls = data ? JSON.parse(data.images) : null;

  return (
    <MainLayout>
      <MainLayout.Content>
        <AuthControlBadge />
        {isSuccess && (
          <Container>
            <StyledImage src={urls[0]} alt="product card image" />{" "}
            <StyledPriceTitle>
              {toCurrency(data.price, { currency: "RUB", showPennies: false })}
            </StyledPriceTitle>
            {`Карточка товара с id ${idNumber}`}
          </Container>
        )}

        <StyledTestContent />
      </MainLayout.Content>
    </MainLayout>
  );
};
