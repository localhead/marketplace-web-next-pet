import { userApi } from "./apiService";
import { authSlice } from "./slice";

import { AuthData, LoginRequest } from "./types";

import { createAsyncThunk } from "@reduxjs/toolkit";
import { cookieAuthStorageService } from "../utils/cookieAuthStorageService";

export const setAuthData = createAsyncThunk<void, AuthData>(
  "auth/setAuthData",
  async (args, { dispatch }) => {
    dispatch(authSlice.actions.setAuthDataInStorage(args));
    if (cookieAuthStorageService.isCanUse) {
      cookieAuthStorageService.setToken(args.token);
    }
    // await dispatch(invalidateUserBasedQueries());
  }
);

export const clearAuthData = createAsyncThunk<void, void>(
  "auth/setAuthData",
  async (_, { dispatch }) => {
    dispatch(authSlice.actions.clearAuthDataInStorage());
    if (cookieAuthStorageService.isCanUse) {
      cookieAuthStorageService.clearToken();
    }
    // await dispatch(invalidateUserBasedQueries());
  }
);

export const login = createAsyncThunk<void, LoginRequest>(
  "auth/login",
  async (args, { dispatch, rejectWithValue }) => {
    try {
      const response = await dispatch(
        userApi.endpoints.login.initiate(args)
      ).unwrap();
      dispatch(setAuthData({ token: response.token }));
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
      dispatch(clearAuthData());
    }
  }
);
