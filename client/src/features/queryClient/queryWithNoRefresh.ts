import { appBaseQuery } from "./baseQuery";
import { ACCESS_TOKEN_HEADER_KEY } from "./constans";

import { AppBaseQueryParams } from "./types";

import { AppRootState } from "@features/store";

export const getQueryWithNoRefresh = (params?: AppBaseQueryParams) =>
  // создание запроса: 3
  appBaseQuery({
    ...params,

    // Хедеры которые нужны будут для процесса авторизации. Но пока они ничего не делают
    prepareHeaders: (headers, { getState }) => {
      const authState = (getState() as AppRootState).auth;

      if (authState.isAuth) {
        headers.set(ACCESS_TOKEN_HEADER_KEY, `Bearer ${authState.token}`);
      }

      return headers;
    },
  });
