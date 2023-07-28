import { FetchBaseQueryError } from "@reduxjs/toolkit/dist/query";
import { userApi } from "./apiService";
import { authSlice } from "./slice";

import { LoginRequest } from "./types";

import { createAsyncThunk } from "@reduxjs/toolkit";

export const login = createAsyncThunk<void, LoginRequest>(
  "users/login",
  async (args, { dispatch, rejectWithValue }) => {
    try {
      const response = await dispatch(
        userApi.endpoints.login.initiate(args)
      ).unwrap();

      dispatch(authSlice.actions.setAuthDataInStorage(response.user));
    } catch (error) {
      throw rejectWithValue(error);
    }
  }
);

export const logout = createAsyncThunk<void, void>(
  "auth/logout",
  async (_, { dispatch }) => {
    try {
      await dispatch(userApi.endpoints.logout.initiate()).unwrap();
    } finally {
      dispatch(authSlice.actions.clearAuthDataInStore());
    }
  }
);

export const loginCheck = createAsyncThunk<void, void>(
  "auth/loginCheck",
  async (_, { dispatch, rejectWithValue }) => {
    try {
      const response = await dispatch(
        userApi.endpoints.loginCheck.initiate()
      ).unwrap();

      dispatch(authSlice.actions.setAuthDataInStorage(response.user));
    } catch (error) {
      if ((error as FetchBaseQueryError).status === 401) {
        dispatch(authSlice.actions.clearAuthDataInStore());
      } else {
        throw rejectWithValue(error);
      }
    }
  }
);
