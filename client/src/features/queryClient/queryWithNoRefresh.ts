import { appBaseQuery } from "./baseQuery";

import { AppBaseQueryParams } from "./types";

export const ACCESS_TOKEN_HEADER_KEY = "Authorization";

export const getQueryWithNoRefresh = (params?: AppBaseQueryParams) =>
  appBaseQuery({
    ...params,

    prepareHeaders: (headers, { getState }) => {
      // const authState = (getState() as AppRootState).auth;

      // if (authState.isAuth) {
      //   headers.set(ACCESS_TOKEN_HEADER_KEY, `Bearer ${authState.token}`);
      // }

      return headers;
    },
  });
