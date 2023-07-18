import { userApi } from "./apiService";

import { LoginRequest } from "./types";

import { createAsyncThunk } from "@reduxjs/toolkit";

export const login = createAsyncThunk<void, LoginRequest>(
  "users/login",
  async (args, { dispatch, rejectWithValue }) => {
    try {
      const res = await dispatch(
        userApi.endpoints.login.initiate(args)
      ).unwrap();
    } catch (error) {
      throw rejectWithValue(error);
    }
  }
);
