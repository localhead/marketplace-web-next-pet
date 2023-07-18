import { Space } from "@components/Space";
import { paths } from "@features/routering/paths";
import { LoginForm } from "@features/user/components/LoginForm";
import { RegistrationForm } from "@features/user/components/RegistrationForm";
import { useModalState } from "@hooks/useModalState";
import { Modal, SelectTabs } from "@packages/uiKit";
import { Button } from "@packages/uiKit/Button";
import { useRouter } from "next/router";
import { FC, useState } from "react";
import { StyledHeaderAuthenticationSection } from "./styles";

export interface HeaderAuthenticationSectionProps {
  className?: string;
  style?: React.CSSProperties;
}

enum Auth {
  Login = "login",
  Register = "register",
}

export const HeaderAuthenticationSection: FC<
  HeaderAuthenticationSectionProps
> = (props) => {
  const { ...restProps } = props;

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
    <StyledHeaderAuthenticationSection>
      <Button size="medium" variant="primary" onClick={onAuthClickHandler}>
        Войти
      </Button>

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
    </StyledHeaderAuthenticationSection>
  );
};
