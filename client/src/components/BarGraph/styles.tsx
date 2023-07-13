import { colors } from "@packages/uiKit";
import { Typography } from "@packages/uiKit/Typography";
import styled, { css } from "styled-components";

export const StyledBarGraph = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
`;

export const StyledChartItemContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  gap: 5px;
  cursor: pointer;
`;

export const StyledMonthTitle = styled(Typography).attrs({
  size: 12,
  weight: 500,
  color: "gray14",
})<{ $isSelected: boolean }>`
  color: ${colors.gray14};
  align-self: center;

  ${({ $isSelected }) =>
    $isSelected &&
    css`
      color: ${colors.primary};
    `}
`;

export const StyledChartDynamicColumn = styled.div<{
  $height: number;
  $isSelected: boolean;
}>`
  width: 35px;
  border-radius: 6px;

  ${({ $height }) =>
    $height &&
    css`
      height: ${$height}%;
    `}

  ${({ $isSelected }) =>
    $isSelected
      ? css`
          background-color: ${colors.primary};
        `
      : css`
          background-color: ${colors.gray16};
        `};
`;
