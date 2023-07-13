import { useEffect } from "react";
import { useAuthRedirect } from "./useAuthNavigate";
import { useIsAuth } from "./useIsAuth";

export const useAuthProtection = () => {
  const toAuth = useAuthRedirect({ gentle: false });

  const isAuth = useIsAuth();

  useEffect(() => {
    if (!isAuth) {
      toAuth();
    }
  }, [isAuth, toAuth]);

  if (!isAuth) {
    throw new Error(
      "Страница доступна только для авторизованных пользователей"
    );
  }
};
