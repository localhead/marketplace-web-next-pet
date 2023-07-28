import { useAppDispatch } from "@features/store";
import { authSlice, loginCheck } from "@features/user";
import { FetchBaseQueryError } from "@reduxjs/toolkit/dist/query";
import { FC, memo, useCallback, useEffect } from "react";

export const _CheckInitialLogin: FC = () => {
  const dispatch = useAppDispatch();

  const loginCheckInitialFunction = useCallback(async () => {
    try {
      await dispatch(loginCheck()).unwrap();
    } catch (e) {
      if ((e as FetchBaseQueryError).status === 401) {
        dispatch(authSlice.actions.clearAuthDataInStore());
        console.error("Error occurred:", e);
      }
    }
  }, [dispatch]);

  useEffect(() => {
    loginCheckInitialFunction();
  }, [loginCheckInitialFunction]);

  return <></>;
};

export const CheckInitialLogin = memo(_CheckInitialLogin);
