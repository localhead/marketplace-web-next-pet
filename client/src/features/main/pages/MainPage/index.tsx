import { MainLayout } from "@layouts/MainLayout";
import { FC } from "react";

import { useWindowWidth } from "@features/adaptive/useWindowWidth";

export const MainPage: FC = () => {
  const width = useWindowWidth();

  return (
    <MainLayout>
      <MainLayout.Content></MainLayout.Content>
    </MainLayout>
  );
};
