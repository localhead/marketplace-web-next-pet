import { FetchBaseQueryArgs } from "@reduxjs/toolkit/dist/query/fetchBaseQuery";

export type AppBaseQueryParams = Omit<FetchBaseQueryArgs, "baseUrl"> & {
  subpath?: string;
};
