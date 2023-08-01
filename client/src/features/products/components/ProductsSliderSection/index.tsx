import { SlideButtons } from "@components/SlideButtons";
import { useMapProductCards } from "@features/products/hooks/useMapProductCards";
import { BoilerPartsRecord } from "@features/products/store/types";

import { useWindowWidth } from "@features/adaptive/useWindowWidth";
import { MultipleSlider } from "@packages/uiKit/MultipleSlider";
import { useMultipleSlider } from "@packages/uiKit/MultipleSlider/hooks";
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

  const resultData: BoilerPartsRecord[] | null = result?.data
    ? result?.data.rows
    : null;

  //console.log(resultData);

  // Adaptive and responsive config
  const width = useWindowWidth();
  const isDesktop = width === "desktop";
  const isTablet = width === "tablet";

  // Creating React.Node[] with hook
  const productItems = useMapProductCards(resultData);

  // Creating config for slider
  const { next, prev, multipleSliderProps } = useMultipleSlider({
    items: productItems?.length ?? 0,
    itemsInRow: isDesktop ? 6 : isTablet ? 4 : 2,
    step: 1,
    gap: 15,
  });

  return (
    <StyledProductsSliderSection title={title} right={right}>
      <SlideButtons
        onNextClick={next}
        onPrevClick={prev}
        LinkTitle="Все котики"
      />
      <MultipleSlider isSquare={true} {...multipleSliderProps}>
        {productItems}
      </MultipleSlider>
    </StyledProductsSliderSection>
  );
};

export const ProductsSliderSection = memo(_ProductsSliderSection);
