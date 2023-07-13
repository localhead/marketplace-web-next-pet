import { appBaseQuery } from "./baseQuery";
import { ACCESS_TOKEN_HEADER_KEY } from "./constans";

import { AppRootState } from "@features/store/types";
import { clearAuthData } from "@features/user/store/thunks/clearAuthData";
import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/dist/query";
import { AppBaseQueryParams } from "./types";

export const getQueryWithNoRefresh = (params?: AppBaseQueryParams) => {
  const resultFetchFn: BaseQueryFn<
    string | FetchArgs,
    unknown,
    FetchBaseQueryError
  > = async (args, api, extraOptions) => {
    const result = await appBaseQuery({
      ...params,

      prepareHeaders: (headers, { getState }) => {
        const authState = (getState() as AppRootState).auth;

        if (authState.isAuth) {
          headers.set(ACCESS_TOKEN_HEADER_KEY, `Bearer ${authState.token}`);
        }

        return headers;
      },
    })(args, api, extraOptions);

    if (result.error && result.error.status === 403) {
      api.dispatch(clearAuthData());
    }
    return result;
  };

  return resultFetchFn;
};
