import { AuthData, AuthState } from "./types";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { cookieAuthStorageService } from "../utils/cookieAuthStorageService";

const authOffInitialState: AuthState = {
  isAuth: false,
  token: null,
};
const getInitialState = (): AuthState => {
  if (!cookieAuthStorageService.isCanUse) {
    return authOffInitialState;
  }

  const token = cookieAuthStorageService.getToken();

  if (!token) {
    return authOffInitialState;
  }

  return {
    isAuth: true,
    token,
  };
};

const initialState = getInitialState();
export const authSlice = createSlice({
  name: "auth",
  initialState: initialState as AuthState,

  reducers: {
    setAuthDataInStorage: (_: AuthState, action: PayloadAction<AuthData>) => {
      return { isAuth: true, token: action.payload.token } as AuthState;
    },

    clearAuthDataInStorage: () => {
      return {
        isAuth: false,
        token: null,
      } as AuthState;
    },
  },
});
