import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AuthState, User } from "./types";

const authInitialState: AuthState = {
  isAuth: false,
  user: { userId: 1, username: "", email: "" },
};

const getInitialState = (): AuthState => {
  return authInitialState;
};

const initialState = getInitialState();

export const authSlice = createSlice({
  name: "auth",
  initialState: initialState as AuthState,
  reducers: {
    setAuthDataInStorage: (_: AuthState, action: PayloadAction<User>) => {
      return { isAuth: true, user: action.payload } as AuthState;
    },

    clearAuthDataInStore: (_: AuthState) => {
      return { isAuth: false } as AuthState;
    },
  },
});
