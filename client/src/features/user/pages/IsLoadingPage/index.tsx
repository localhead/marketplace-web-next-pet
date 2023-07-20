import { FC } from "react";

import { MainLayout } from "@layouts/MainLayout";
import { Container } from "@layouts/MainLayout/pageContentComponents/Container";
import { StyledUnauthorizedPageContent } from "./styles";

export const IsLoadingPage: FC = () => {
  return (
    <MainLayout>
      <MainLayout.Content>
        <StyledUnauthorizedPageContent>
          <Container>Is Loading.....</Container>
        </StyledUnauthorizedPageContent>
      </MainLayout.Content>
    </MainLayout>
  );
};
