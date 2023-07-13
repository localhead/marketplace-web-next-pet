import { getQueryWithNoRefresh } from "./queryWithNoRefresh";
import { AppBaseQueryParams } from "./types";

import { authSlice } from "@features/user";
import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query";

export const getAppQuery = (params?: AppBaseQueryParams) => {
  const baseQuery = getQueryWithNoRefresh(params);

  const baseQueryWithRefresh: BaseQueryFn<
    string | FetchArgs,
    unknown,
    FetchBaseQueryError
  > = async (args, api, extraOptions) => {
    const result = await baseQuery(args, api, extraOptions);

    if (result.error && result.error.status === 403) {
      api.dispatch(authSlice.actions.clearAuthDataInStorage());
      // const refreshResult = await getQueryWithNoRefresh()(
      //   '/auth/refresh',
      //   api,
      //   extraOptions,
      // );
      // if (refreshResult.data) {
      //   const refreshResultData = refreshResult.data as RefreshResponse;
      //   api.dispatch(
      //     setAuthData({
      //       token: refreshResultData.accessToken,
      //     }),
      //   );
      // } else {
      //   api.dispatch(logout());
      // }
    }
    return result;
  };

  return baseQueryWithRefresh;
};
