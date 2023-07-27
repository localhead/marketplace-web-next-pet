import { StyledLol } from "@features/main/pages/MainPage/style";
import { AuthControlBadge } from "@features/user/components/AuthControlBadge";
import { MainLayout } from "@layouts/MainLayout";
import { Container } from "@layouts/MainLayout/pageContentComponents/Container";
import { FC } from "react";

export interface ProductDetailPageProps {
  className?: string;
  style?: React.CSSProperties;

  idNumber: number;
}

export const ProductDetailPage: FC<ProductDetailPageProps> = (props) => {
  const { idNumber, ...restProps } = props;

  return (
    <MainLayout>
      <MainLayout.Content>
        <AuthControlBadge />
        <Container>{`Карточка товара с id ${idNumber}`}</Container>

        <StyledLol />
      </MainLayout.Content>
    </MainLayout>
  );
};
