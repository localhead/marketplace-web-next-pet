import { MainLayout } from "@layouts/MainLayout";
import { FC } from "react";

import { useWindowWidth } from "@features/adaptive/useWindowWidth";
import { ProductsSliderSection } from "@features/products/components/ProductsSliderSection";
import { ProductOptions } from "@features/products/components/ProductsSliderSection/types";
import { AuthControlBadge } from "@features/user/components/AuthControlBadge";
import { StyledTestContent } from "./style";

export const MainPage: FC = () => {
  const width = useWindowWidth();

  return (
    <MainLayout>
      <MainLayout.Content>
        <AuthControlBadge />
        <ProductsSliderSection
          productsOption={ProductOptions.new}
          title="Хиты продаж"
        />
        <StyledTestContent />
      </MainLayout.Content>
    </MainLayout>
  );
};
