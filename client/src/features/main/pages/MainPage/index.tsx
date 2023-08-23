import { MainLayout } from "@layouts/MainLayout";
import { FC } from "react";

import { Space } from "@components/Space";
import { FaqSection } from "@features/faq";
import { ProductsSliderSection } from "@features/products/components/ProductsSliderSection";
import { ProductOptions } from "@features/products/components/ProductsSliderSection/types";
import { AuthControlBadge } from "@features/user/components/AuthControlBadge";

export const MainPage: FC = () => {
  return (
    <MainLayout>
      <MainLayout.Content>
        <AuthControlBadge />
        <ProductsSliderSection
          productsOption={ProductOptions.new}
          title="Новинки"
        />{" "}
        <Space size={80} />
        <ProductsSliderSection
          productsOption={ProductOptions.bestsellers}
          title="Хиты продаж"
        />
        <FaqSection />
        <Space size={150} />
      </MainLayout.Content>
    </MainLayout>
  );
};
