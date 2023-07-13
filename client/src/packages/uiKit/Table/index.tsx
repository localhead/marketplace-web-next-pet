import {
  StyledContainer,
  StyledHeaderRow,
  StyledPagination,
  StyledTable,
  StyledTableBody,
  StyledTableBodyRow,
  StyledTableDataCell,
  StyledTableDataCellContentWrapper,
  StyledTableHead,
  StyledTableHeader,
  StyledTableHeaderTitle,
  StyledTableWrapper,
} from "./styles";

import { TableColumn } from "./types";

import { PaginationProps } from "@packages/uiKit/Pagination";
import cn from "classnames";
import React, { memo } from "react";
import { Row, TableOptions, useFlexLayout, useTable } from "react-table";

export type TableProps<T extends {} = {}> = {
  className?: string;
  style?: React.CSSProperties;

  data: T[];
  columns: TableColumn<T>[];

  getRowId?: TableOptions<T>["getRowId"];

  getRowProps?: (row: Row<T>) => JSX.IntrinsicElements["tr"];

  pagination?: PaginationProps;

  scroll?: boolean;
  hideHeader?: boolean;
};

const _Table = <T extends {} = {}>(props: TableProps<T>) => {
  const {
    data,
    columns,
    getRowId,
    getRowProps,
    pagination,
    scroll = true,
    hideHeader,
    className,
    style,
    ...restProps
  } = props;

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable(
      {
        data,
        columns,
        getRowId,
      },
      useFlexLayout
    );

  return (
    <StyledContainer className={className} style={style}>
      <StyledTableWrapper $enableScroll={scroll}>
        <StyledTable {...getTableProps()} {...restProps}>
          {!hideHeader && (
            <StyledTableHead>
              {headerGroups.map((headerGroup) => {
                const { key: headerGroupKey, ...headerGroupProps } =
                  headerGroup.getHeaderGroupProps();
                return (
                  <StyledHeaderRow key={headerGroupKey} {...headerGroupProps}>
                    {headerGroup.headers.map((header) => {
                      const { key: headerKey, ...headerProps } =
                        header.getHeaderProps();

                      return (
                        <StyledTableHeader key={headerKey} {...headerProps}>
                          <StyledTableHeaderTitle>
                            {header.render("Header")}
                          </StyledTableHeaderTitle>
                        </StyledTableHeader>
                      );
                    })}
                  </StyledHeaderRow>
                );
              })}
            </StyledTableHead>
          )}

          <StyledTableBody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              let rowProps = row.getRowProps();

              if (getRowProps) {
                const { className, style, key, ...restAddProps } =
                  getRowProps(row);

                if (className) {
                  rowProps.className = cn(rowProps.className, className);
                }
                if (style) {
                  rowProps.style = { ...rowProps.style, ...style };
                }

                rowProps = {
                  ...rowProps,
                  ...restAddProps,
                };
              }

              const { key: rowKey, ...rowPropsWithNoKey } = rowProps;

              return (
                <StyledTableBodyRow key={rowKey} {...rowPropsWithNoKey}>
                  {row.cells.map((cell) => {
                    const isOverflow =
                      (cell.column as TableColumn<T>).overflow ?? true;

                    const { key: cellKey, ...cellProps } = cell.getCellProps();

                    return (
                      <StyledTableDataCell key={cellKey} {...cellProps}>
                        <StyledTableDataCellContentWrapper
                          $isOverflow={isOverflow}
                        >
                          {cell.render("Cell")}
                        </StyledTableDataCellContentWrapper>
                      </StyledTableDataCell>
                    );
                  })}
                </StyledTableBodyRow>
              );
            })}
          </StyledTableBody>
        </StyledTable>
      </StyledTableWrapper>

      {pagination && <StyledPagination {...pagination} />}
    </StyledContainer>
  );
};

export const Table = memo(_Table) as typeof _Table;
