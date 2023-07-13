export type ApiRecordId = number;
export type ApiImageUrl = string;
export type ApiDateString = string;
export type ApiDateYearMonth = string;
export type ApiTimeString = string;
export type ApiPaginationResponse<T> = {
  result: T[];
  pagination: {
    totalRows: number;
    pageCount: number;
  };
};

export type ApiPaginationParams = {
  page?: number;
  perPage?: number;
};

export type ApiGetByIdParams = {
  id: ApiRecordId;
};

export type ApiErrorData<
  Status extends number = number,
  Data extends { code: string; data?: any } | undefined =
    | { code: string; data?: any }
    | undefined
> = {
  status: Status;
  data?: Data;
};
