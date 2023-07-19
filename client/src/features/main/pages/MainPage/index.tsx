import { MainLayout } from "@layouts/MainLayout";
import { FC } from "react";

import { useWindowWidth } from "@features/adaptive/useWindowWidth";
import { StyledLol } from "./style";

export const MainPage: FC = () => {
  const width = useWindowWidth();

  return (
    <MainLayout>
      <MainLayout.Content>
        <StyledLol />
      </MainLayout.Content>
    </MainLayout>
  );
};
