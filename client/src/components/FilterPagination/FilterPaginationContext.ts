import { createContext } from "react";

export type FilterPaginationContextContainer = {
  filterPaginationRef: null | HTMLDivElement;
};
export const FilterPaginationContext =
  createContext<FilterPaginationContextContainer>({
    filterPaginationRef: null,
  });
