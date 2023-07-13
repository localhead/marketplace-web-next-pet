import { Pagination } from '@packages/uiKit/Pagination';
import { Typography } from '@packages/uiKit/Typography';
import { colors } from '@packages/uiKit/utils/colors';
import styled, { css } from 'styled-components';

export const StyledContainer = styled.div``;

export const StyledTableWrapper = styled.div<{ $enableScroll: boolean }>`
  padding-bottom: 10px;

  ${({ $enableScroll }) =>
    $enableScroll
      ? css`
          overflow: auto;
        `
      : ''};
`;

export const StyledTable = styled.div`
  font-size: 12px;
  font-weight: 500;
  color: ${colors.dark2};
  width: fit-content;
`;

export const StyledTableHead = styled.div``;

export const StyledTableDataCell = styled.div`
  padding-right: 15px;

  :last-child {
    padding-right: 15px;
  }
`;

export const StyledTableDataCellContentWrapper = styled.div<{
  $isOverflow: boolean;
}>`
  padding: 9px 0px;
  height: 100%;
  border-bottom: 1px solid ${colors.gray8};

  display: flex;
  gap: 50px;
  flex-direction: column;
  justify-content: center;

  ${({ $isOverflow }) =>
    $isOverflow
      ? css`
          overflow: hidden;
        `
      : css`
          overflow: visible;
        `}
`;

export const StyledHeaderRow = styled.div``;

export const StyledTableBodyRow = styled.div`
  width: fit-content;
  min-width: 100% !important;
`;

export const StyledTableHeaderTitle = styled.div`
  background-color: ${colors.gray9};
  padding: 5px 12px;
  border-radius: 8px;
  margin-bottom: 18px;
  width: fit-content;
`;

export const StyledTableHeader = styled(Typography).attrs({
  color: 'gray2',
  forwardedAs: 'div',
})`
  width: fit-content;
  text-align: left;
`;

export const StyledTableBody = styled.div``;

export const StyledPagination = styled(Pagination)`
  margin-top: 36px;
`;
