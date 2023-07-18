import { MainLayout } from "@layouts/MainLayout";
import { FC, useState } from "react";

import { Space } from "@components/Space";
import { useWindowWidth } from "@features/adaptive/useWindowWidth";
import { paths } from "@features/routering/paths";
import { LoginForm } from "@features/user/components/LoginForm";
import { RegistrationForm } from "@features/user/components/RegistrationForm";
import { useModalState } from "@hooks/useModalState";
import { Container } from "@layouts/MainLayout/pageContentComponents/Container";
import { Button, Modal, SelectTabs } from "@packages/uiKit";
import { useRouter } from "next/router";

enum Auth {
  Login = "login",
  Register = "register",
}

export const MainPage: FC = () => {
  const width = useWindowWidth();

  const [activeTab, setActiveTab] = useState(Auth.Login);

  const registrationSubmitHandler = () => {
    setActiveTab(Auth.Login);
  };

  const router = useRouter();

  const loginSubmitHandler = () => {
    router.push(paths.profile());
  };

  const toggleTab = activeTab === Auth.Login;

  const [modalState, setModalActions] = useModalState();

  const onAuthClickHandler = () => {
    setModalActions.openHandler();
  };

  return (
    <MainLayout>
      <MainLayout.Content>
        <Container>
          <Button size="medium" variant="primary" onClick={onAuthClickHandler}>
            Войти
          </Button>
        </Container>

        <Modal
          title="Войдите или создайте аккаунт"
          width={600}
          {...modalState}
          onClose={setModalActions.closeHandler}
        >
          <Space size={50} />
          <SelectTabs
            value={activeTab}
            options={[
              { value: Auth.Login, label: "Войти" },
              { value: Auth.Register, label: "Создать аккаунт " },
            ]}
            onChange={setActiveTab}
          />
          <Space size={30} />
          {toggleTab ? (
            <LoginForm onSubmit={loginSubmitHandler} />
          ) : (
            <RegistrationForm onSubmit={registrationSubmitHandler} />
          )}
        </Modal>
      </MainLayout.Content>
    </MainLayout>
  );
};
