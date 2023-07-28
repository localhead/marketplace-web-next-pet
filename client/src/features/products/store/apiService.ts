import { getQueryWithNoRefresh } from "@features/queryClient/queryWithNoRefresh";
import { createApi } from "@reduxjs/toolkit/dist/query/react";
import {
  BestsellerProductsResponse as GetBestSellersResponse,
  GetBySearchNameRequest,
  GetBySearchNameResponse,
  NewProductsResponse,
} from "./types";

export const USER_TAG = "USER_TAG" as const;

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: getQueryWithNoRefresh({ subpath: "boiler-parts" }),
  tagTypes: [USER_TAG],
  endpoints: (builder) => {
    return {
      getBestsellerProducts: builder.query<GetBestSellersResponse, void>({
        query: (body) => ({
          url: "bestsellers/",
          method: "GET",
          body,
        }),
      }),
      getNewProducts: builder.query<NewProductsResponse, void>({
        query: (body) => ({
          url: "new/",
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
