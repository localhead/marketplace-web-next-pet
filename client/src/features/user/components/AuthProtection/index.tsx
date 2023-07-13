import { useAuthRedirect } from "@features/user/hooks/useAuthNavigate";
import { useIsAuth } from "@features/user/hooks/useIsAuth";
import { FC, ReactNode, useEffect } from "react";

export interface AuthProtectionProps {
  children: ReactNode;
}

export const AuthProtection: FC<AuthProtectionProps> = (props) => {
  const { children } = props;

  const toAuth = useAuthRedirect({ gentle: false });

  const isAuth = useIsAuth();

  useEffect(() => {
    if (!isAuth) {
      toAuth();
    }
  }, [isAuth, toAuth]);

  if (isAuth) {
    return <>{children}</>;
  }

  return null;
};
