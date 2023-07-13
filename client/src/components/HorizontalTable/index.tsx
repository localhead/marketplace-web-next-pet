import {
  StyledCell,
  StyledHorizontalTable,
  StyledRow,
  StyledRowCellsContainer,
  StyledRowHeader,
} from './styles';
import { HorizontalTableRow } from './types';

import React, { memo } from 'react';

export interface HorizontalTableProps<T extends object> {
  className?: string;
  style?: React.CSSProperties;
  getDataKey: (dataItem: T) => React.Key;
  data: T[];
  rows: HorizontalTableRow<T>[];
  columnWidth: number;
  columnGap: number;
}

const _HorizontalTable = <T extends object = Record<string, any>>(
  props: HorizontalTableProps<T>,
) => {
  const { getDataKey, data, rows, columnWidth, columnGap, ...restProps } =
    props;

  return (
    <StyledHorizontalTable {...restProps}>
      {rows.map((row) => {
        return (
          <StyledRow key={row.id}>
            {row.header ? (
              <StyledRowHeader>{row.header}</StyledRowHeader>
            ) : null}
            <StyledRowCellsContainer
              $columnGap={columnGap}
              $columnWidth={columnWidth}>
              {data.map((dataItem) => (
                <StyledCell key={getDataKey(dataItem)}>
                  {row.render(dataItem)}
                </StyledCell>
              ))}
            </StyledRowCellsContainer>
          </StyledRow>
        );
      })}
    </StyledHorizontalTable>
  );
};

export const HorizontalTable = memo(
  _HorizontalTable,
) as typeof _HorizontalTable;
