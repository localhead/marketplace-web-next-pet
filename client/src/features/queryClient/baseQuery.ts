import { API_URL } from "@features/api";
import { fetchBaseQuery } from "@reduxjs/toolkit/dist/query";
import { AppBaseQueryParams } from "./types";

export const appBaseQuery = (params?: AppBaseQueryParams) => {
  // INIT_CITY
  const { subpath, api = API_URL, ...restParams } = params ?? {};
  // INIT_CITY
  return fetchBaseQuery({
    baseUrl: `${api}/${subpath}`,
    timeout: 3000,

    ...restParams,
  });
};
