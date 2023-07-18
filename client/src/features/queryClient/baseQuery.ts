import { AppBaseQueryParams } from "./types";

import { API_URL } from "@features/api";
import { fetchBaseQuery } from "@reduxjs/toolkit/dist/query";

export const appBaseQuery = (params?: AppBaseQueryParams) => {
  const { subpath, ...restParams } = params ?? {};

  return fetchBaseQuery({
    baseUrl: `${API_URL}/${subpath}`,
    //  credentials: "include" - позволит сохранить куки в хроме
    credentials: "include",
    ...restParams,
  });
};
