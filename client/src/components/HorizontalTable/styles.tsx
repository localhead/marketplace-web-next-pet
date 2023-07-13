import { colors, Typography } from "@packages/uiKit";
import styled, { css } from "styled-components";

export const StyledHorizontalTable = styled.div`
  border-top: 1px solid ${colors.gray12};
  border-bottom: 1px solid ${colors.gray12};
  overflow-x: auto;
`;

export const StyledRow = styled.div`
  :not(:last-child) {
    border-bottom: 1px solid ${colors.gray12};
  }
  padding: 13px 0;
  width: fit-content;
`;

export const StyledRowHeader = styled(Typography).attrs({
  size: 12,
  color: "gray3",
})`
  margin-bottom: 4px;
`;
export const StyledRowCellsContainer = styled.div<{
  $columnWidth: number;
  $columnGap: number;
}>`
  display: grid;
  ${({ $columnWidth, $columnGap }) => css`
    grid-auto-flow: column;
    grid-auto-columns: ${$columnWidth}px;
    gap: ${$columnGap}px;
  `}
`;

export const StyledCell = styled.div``;
