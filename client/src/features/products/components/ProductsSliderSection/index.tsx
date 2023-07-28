import { FC, ReactNode, memo } from "react";
import { useGetProductsOptions } from "./hooks";
import { StyledProductsSliderSection } from "./styles";
import { ProductOptions, ProductsOptionsHookResponse } from "./types";

interface ProductsSliderSectionProps {
  className?: string;
  style?: React.CSSProperties;

  productsOption: ProductOptions;
  right?: ReactNode;
  title?: ReactNode;
}

export const _ProductsSliderSection: FC<ProductsSliderSectionProps> = (
  props
) => {
  const { productsOption, title, right, ...restProps } = props;

  // Selective data fetching depending on what kind products do we need
  const result: ProductsOptionsHookResponse =
    useGetProductsOptions(productsOption);

  console.log(result?.data);

  // настройка параметров адапитва

  // получение нодов их хука

  // вставка нодов

  return (
    <StyledProductsSliderSection title={title} right={right}>
      content
    </StyledProductsSliderSection>
  );
};

export const ProductsSliderSection = memo(_ProductsSliderSection);
