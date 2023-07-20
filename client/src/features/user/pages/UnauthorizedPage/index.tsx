import { FC } from "react";

import { Space } from "@components/Space";
import { AuthControlBadge } from "@features/user/components/AuthControlBadge";
import { MainLayout } from "@layouts/MainLayout";
import { Container } from "@layouts/MainLayout/pageContentComponents/Container";
import { StyledUnauthorizedPageContent } from "./styles";

export const UnauthorizedPage: FC = () => {
  return (
    <MainLayout>
      <MainLayout.Content>
        <StyledUnauthorizedPageContent>
          <AuthControlBadge />
          <Space size={20} />
          <Container>
            Данная страница доступна только авторизованным пользователям
          </Container>
        </StyledUnauthorizedPageContent>
      </MainLayout.Content>
    </MainLayout>
  );
};
