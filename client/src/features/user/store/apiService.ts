import { getQueryWithNoRefresh } from "@features/queryClient/queryWithNoRefresh";
import { createApi } from "@reduxjs/toolkit/dist/query/react";
import {
  LoginRequest,
  LoginResponse,
  LogoutRequest,
  LogoutResponse,
  RegistrationRequest,
  RegistrationResponse,
} from "./types";

export const USER_TAG = "USER_TAG" as const;

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: getQueryWithNoRefresh({ subpath: "users" }),
  tagTypes: [USER_TAG],
  endpoints: (builder) => {
    return {
      login: builder.mutation<LoginResponse, LoginRequest>({
        query: (body) => ({
          url: "login/",
          method: "POST",
          body,
        }),
      }),

      logout: builder.mutation<LogoutResponse, LogoutRequest>({
        query: () => ({
          url: "logout/",
          method: "POST",
        }),
      }),

      registration: builder.mutation<RegistrationResponse, RegistrationRequest>(
        {
          query: (body) => ({
            url: "signup",
            method: "POST",
            body,
          }),
        }
      ),
    };
  },
});
