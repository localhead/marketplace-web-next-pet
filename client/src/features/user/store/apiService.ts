import {
  AddUserAddressRequest,
  AddUserAddressResponse,
  ChangePasswordRequest,
  ChangePasswordResponse,
  EditProfileRequest,
  EditProfileResponse,
  GetAddressesRequest,
  GetAddressesResponse,
  GetProfileResponse,
  GetUserRequest,
  LoginRequest,
  LoginResponse,
  LogoutRequest,
  LogoutResponse,
  PatchProfileRequest,
  PatchProfileResponse,
  RegistrationRequest,
  RegistrationResponse,
  ResetPasswordConfirmRequest,
  ResetPasswordConfirmResponse,
  ResetPasswordRequest,
  ResetPasswordResponse,
  ResetPasswordValidateTokenRequest,
  ResetPasswordValidateTokenResponse,
} from "./types";

import { getQueryWithNoRefresh } from "@features/queryClient/queryWithNoRefresh";
import { createApi } from "@reduxjs/toolkit/dist/query/react";

export const USER_TAG = "USER_TAG" as const;
export const USER_DEPENDENCY_QUERIES = { type: USER_TAG, id: "DEPENDENCY" };
export const USER_ADDRESSES_LIST_TAG = {
  type: USER_TAG,
  id: "ADDRESSES_LIST",
};

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: getQueryWithNoRefresh({ subpath: "user" }),
  tagTypes: [USER_TAG],
  endpoints: (builder) => {
    return {
      login: builder.mutation<LoginResponse, LoginRequest>({
        query: (body) => ({
          url: "auth/",
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
            url: "registration/",
            method: "POST",
            body,
          }),
        }
      ),

      getUser: builder.query<GetProfileResponse, GetUserRequest>({
        providesTags: [USER_DEPENDENCY_QUERIES, USER_TAG],
        query: () => ({
          url: "/",
          method: "GET",
        }),
      }),

      userEdit: builder.mutation<EditProfileResponse, EditProfileRequest>({
        invalidatesTags: [USER_TAG],
        query: (request) => ({
          url: "/",
          method: "PUT",
          body: request,
        }),
      }),

      userPatch: builder.mutation<PatchProfileResponse, PatchProfileRequest>({
        invalidatesTags: [USER_TAG],
        query: (request) => ({
          url: "/",
          method: "PATCH",
          body: request,
        }),
      }),

      changePassword: builder.mutation<
        ChangePasswordResponse,
        ChangePasswordRequest
      >({
        query: (body) => ({
          url: "change-password/",
          method: "POST",
          body,
        }),
      }),

      resetPassword: builder.mutation<
        ResetPasswordResponse,
        ResetPasswordRequest
      >({
        query: (body) => ({
          url: "password_reset/",
          method: "POST",
          body,
        }),
      }),
      resetPasswordConfirm: builder.mutation<
        ResetPasswordConfirmResponse,
        ResetPasswordConfirmRequest
      >({
        query: (body) => ({
          url: "password_reset/confirm/",
          method: "POST",
          body,
        }),
      }),

      resetPasswordValidateToken: builder.query<
        ResetPasswordValidateTokenResponse,
        ResetPasswordValidateTokenRequest
      >({
        query: (body) => ({
          url: "password_reset/validate_token/",
          method: "POST",
          body,
        }),
      }),

      getAddresses: builder.query<GetAddressesResponse, GetAddressesRequest>({
        providesTags: [USER_ADDRESSES_LIST_TAG],
        query: () => ({
          url: "address/",
          method: "GET",
        }),
      }),

      addAddress: builder.mutation<
        AddUserAddressResponse,
        AddUserAddressRequest
      >({
        invalidatesTags: [USER_ADDRESSES_LIST_TAG],
        query: (body) => ({
          url: "address/",
          method: "POST",
          body,
        }),
      }),
    };
  },
});
