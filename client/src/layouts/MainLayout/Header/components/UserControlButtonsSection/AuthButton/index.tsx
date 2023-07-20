import { Space } from "@components/Space";
import { paths } from "@features/routering/paths";
import { useAppSelector } from "@features/store";
import { LoginForm } from "@features/user/components/LoginForm";
import { RegistrationForm } from "@features/user/components/RegistrationForm";
import { useModalState } from "@hooks/useModalState";
import { UserIcon } from "@packages/icons";
import { IconButton, Modal, SelectTabs } from "@packages/uiKit";
import { Popover } from "antd";
import { useRouter } from "next/router";
import { FC, memo, useState } from "react";
import { PopoverContent } from "./PopoverContent";
import { StyledAuthButton, StyledUsernameTitle } from "./styles";

interface AuthButtonProps {
  className?: string;
  style?: React.CSSProperties;

  iconSize: number;
}

enum Auth {
  Login = "login",
  Register = "register",
}

export const _AuthButton: FC<AuthButtonProps> = (props) => {
  const { iconSize = 20, ...restProps } = props;

  const [activeTab, setActiveTab] = useState(Auth.Login);

  const router = useRouter();

  const registrationSubmitHandler = () => {
    setActiveTab(Auth.Login);
  };

  const isAuth = useAppSelector((state) => state.auth.isAuth);
  const authUserInStore = useAppSelector((state) => state.auth.user);

  const loginSubmitHandler = () => {
    router.push(paths.profile());
  };

  const toggleTab = activeTab === Auth.Login;

  const [modalState, setModalActions] = useModalState();

  const onAuthClickHandler = () => {
    !isAuth && setModalActions.openHandler();
  };

  return (
    <StyledAuthButton>
      <Popover
        content={<PopoverContent />}
        trigger="click"
        placement="bottomRight"
      >
        <IconButton
          onClick={onAuthClickHandler}
          variant="secondary"
          rounded={false}
          size="default"
        >
          <UserIcon size={iconSize} />
          {authUserInStore && (
            <StyledUsernameTitle>
              {authUserInStore.username}
            </StyledUsernameTitle>
          )}
        </IconButton>
      </Popover>

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
    </StyledAuthButton>
  );
};

export const AuthButton = memo(_AuthButton);
