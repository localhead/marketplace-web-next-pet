import { useAppSelector } from "@features/store";
import { Container } from "@layouts/MainLayout/pageContentComponents/Container";
import { FC, memo } from "react";
import {
  StyledAuthControlBadge,
  StyledIsAuthStatus,
  StyledUserDataContainer,
  StyledUserDataTextLine,
} from "./styles";

interface AuthControlBadgeProps {
  className?: string;
  style?: React.CSSProperties;
}

export const _AuthControlBadge: FC<AuthControlBadgeProps> = (props) => {
  const { ...restProps } = props;

  const isAuthInStore = useAppSelector((state) => state.auth.isAuth);
  const authUserInStore = useAppSelector((state) => state.auth.user);

  console.log("Auth is store is ", isAuthInStore, authUserInStore);

  return (
    <Container>
      <StyledAuthControlBadge>
        <StyledIsAuthStatus $isSuccessLoginCheck={isAuthInStore}>
          {isAuthInStore ? "Online" : "Offline"}
        </StyledIsAuthStatus>
        {authUserInStore ? (
          <StyledUserDataContainer>
            <StyledUserDataTextLine>
              Номер пользователя: {authUserInStore.userId}
            </StyledUserDataTextLine>
            <StyledUserDataTextLine>
              Имя пользователя: {authUserInStore.username}
            </StyledUserDataTextLine>
            <StyledUserDataTextLine>
              Почта пользователя: {authUserInStore.email}
            </StyledUserDataTextLine>
          </StyledUserDataContainer>
        ) : (
          <>Нет данных об авторизованном пользователе</>
        )}
      </StyledAuthControlBadge>
    </Container>
  );
};

export const AuthControlBadge = memo(_AuthControlBadge);
