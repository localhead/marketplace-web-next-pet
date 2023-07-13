import { FilterField } from "./FilterField";
import { FilterResetButton } from "./FilterResetButton";
import { ItemsGrid } from "./ItemsGrid";
import {
  StyledDivider,
  StyledFilter,
  StyledFilterPagination,
  StyledPaginationArea,
} from "./styles";

import { Pagination, PaginationProps } from "@packages/uiKit";
import React, {
  FC,
  PropsWithChildren,
  useContext,
  useMemo,
  useState,
} from "react";
import { FilterPaginationContext } from "./FilterPaginationContext";

export interface FilterPaginationProps extends PropsWithChildren {
  className?: string;
  style?: React.CSSProperties;
}

const PaginationWithWrapper: FC<PaginationProps> = (props) => {
  const { onChangePage, ...restProps } = props;

  const { filterPaginationRef } = useContext(FilterPaginationContext);

  const changePageHandlerWithScroll = (pageIndex: number) => {
    onChangePage(pageIndex);

    if (filterPaginationRef) {
      filterPaginationRef.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  return (
    <StyledPaginationArea>
      <Pagination onChangePage={changePageHandlerWithScroll} {...restProps} />
    </StyledPaginationArea>
  );
};

//@ts-ignore
const Filter: typeof StyledFilter & {
  Field: typeof FilterField;
  ResetButton: typeof FilterResetButton;
} = StyledFilter;
Filter.Field = FilterField;
Filter.ResetButton = FilterResetButton;

export const FilterPagination: FC<FilterPaginationProps> & {
  Filter: typeof Filter;
  ItemsGrid: typeof ItemsGrid;
  Pagination: typeof PaginationWithWrapper;
} = (props) => {
  const { children, ...restProps } = props;
  const [filterPaginationRef, setFilterPaginationRef] =
    useState<HTMLDivElement | null>(null);

  const contextValue = useMemo(() => {
    return {
      filterPaginationRef,
    };
  }, [filterPaginationRef]);

  return (
    <StyledFilterPagination ref={setFilterPaginationRef} {...restProps}>
      <FilterPaginationContext.Provider value={contextValue}>
        {children}
        <StyledDivider />
      </FilterPaginationContext.Provider>
    </StyledFilterPagination>
  );
};

FilterPagination.Filter = Filter;
FilterPagination.ItemsGrid = ItemsGrid;
FilterPagination.Pagination = PaginationWithWrapper;
