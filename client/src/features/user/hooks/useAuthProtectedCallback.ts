import { useAuthRedirect } from "./useAuthNavigate";

import { useIsAuth } from "@features/user/hooks/useIsAuth";
import { useMemo } from "react";

export const useAuthProtectedCallback = <F extends Function>(
  callback: F,
  gentle?: boolean
) => {
  const isAuth = useIsAuth();

  const authRedirect = useAuthRedirect({
    gentle,
  });

  const resultCallback = useMemo(() => {
    return isAuth ? callback : authRedirect;
  }, [authRedirect, callback, isAuth]);

  return resultCallback;
};
