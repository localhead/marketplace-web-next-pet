import { MainLayout } from "@layouts/MainLayout";
import { FC } from "react";

import { useWindowWidth } from "@features/adaptive/useWindowWidth";
import { RegistrationForm } from "@features/user/components/AuthSection/RegistrationForm";
import { Container } from "@layouts/MainLayout/pageContentComponents/Container";

export const MainPage: FC = () => {
  const width = useWindowWidth();

  const registrationSubmitHandler = () => {};

  return (
    <MainLayout>
      <MainLayout.Content>
        <Container>
          <RegistrationForm onSubmit={registrationSubmitHandler} />
        </Container>
      </MainLayout.Content>
    </MainLayout>
  );
};
