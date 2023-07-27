import { getQueryWithNoRefresh } from "@features/queryClient/queryWithNoRefresh";
import { createApi } from "@reduxjs/toolkit/dist/query/react";
import {
  BestSellersResponse as GetBestSellersResponse,
  GetBySearchNameRequest,
  GetBySearchNameResponse,
} from "./types";

export const USER_TAG = "USER_TAG" as const;

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: getQueryWithNoRefresh({ subpath: "boiler-parts" }),
  tagTypes: [USER_TAG],
  endpoints: (builder) => {
    return {
      getBestsellers: builder.query<GetBestSellersResponse, void>({
        query: (body) => ({
          url: "bestsellers/",
          method: "GET",
          body,
        }),
      }),
      getBySearchText: builder.mutation<
        GetBySearchNameResponse,
        GetBySearchNameRequest
      >({
        query: (body) => ({
          url: "search/",
          method: "POST",
          body,
        }),
      }),
    };
  },
});
