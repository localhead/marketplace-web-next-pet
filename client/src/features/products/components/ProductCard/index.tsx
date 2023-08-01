import { BoilerPartsRecord } from "@features/products/store/types";
import { FC, memo } from "react";
import { StyledImage, StyledProductCard, StyledTitle } from "./styles";

interface ProductCardProps {
  className?: string;
  style?: React.CSSProperties;
  data: BoilerPartsRecord;
}

export const _ProductCard: FC<ProductCardProps> = (props) => {
  const { data, ...restProps } = props;

  const urls = JSON.parse(data.images);

  return (
    <StyledProductCard>
      <StyledImage src={urls[0]} alt="product card image" />
      <StyledTitle>{data.name}</StyledTitle>
    </StyledProductCard>
  );
};

export const ProductCard = memo(_ProductCard);
