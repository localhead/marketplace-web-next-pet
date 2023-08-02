import { NavLink } from "@components/NavLink";
import { BoilerPartsRecord } from "@features/products/store/types";
import { paths } from "@features/routering/paths";
import { toCurrency } from "@utils/formatToLocaleString";
import { FC, memo } from "react";
import {
  StyledImage,
  StyledManufacturerTitle,
  StyledNameTitle,
  StyledPriceTitle,
  StyledProductCard,
} from "./styles";

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
      <NavLink href={paths.productDetail(data.id)}>
        <StyledImage src={urls[0]} alt="product card image" />
      </NavLink>

      <StyledPriceTitle>
        {toCurrency(data.price, { currency: "RUB", showPennies: false })}
      </StyledPriceTitle>
      <StyledManufacturerTitle>
        {data.boiler_manufacturer}
      </StyledManufacturerTitle>
      <StyledNameTitle>{data.name}</StyledNameTitle>
    </StyledProductCard>
  );
};

export const ProductCard = memo(_ProductCard);
