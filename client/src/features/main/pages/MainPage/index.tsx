import { MainLayout } from "@layouts/MainLayout";
import { FC } from "react";

import { useWindowWidth } from "@features/adaptive/useWindowWidth";
import { AuthControlBadge } from "@features/user/components/AuthControlBadge";
import { StyledLol } from "./style";

export const MainPage: FC = () => {
  const width = useWindowWidth();

  return (
    <MainLayout>
      <MainLayout.Content>
        <AuthControlBadge />
        <StyledLol />
      </MainLayout.Content>
    </MainLayout>
  );
};
