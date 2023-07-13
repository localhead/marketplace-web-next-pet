import { SelectCardsCheckPosition, SelectCardsSize } from "./types";

import { CheckCircleIcon, CircleIcon } from "@packages/icons";
import { colors, Typography } from "@packages/uiKit";
import styled, { css } from "styled-components";

export const StyledCardsContainer = styled.div<{ $cols: number }>`
  display: grid;
  ${({ $cols }) => css`
    grid-template-columns: repeat(${$cols}, 1fr);
  `}
  justify-content: space-between;
  gap: 15px;
`;

export const StyledSelectCards = styled.div``;

export const StyledCheckContainer = styled.div<{
  $checkPosition: SelectCardsCheckPosition;
}>`
  ${({ $checkPosition }) =>
    $checkPosition === "bottom-right"
      ? css`
          bottom: 5px;
          right: 5px;
        `
      : $checkPosition === "left"
      ? css`
          left: 10px;
          top: 50%;
          transform: translate(0, -50%);
        `
      : ""}

  position: absolute;
  cursor: pointer;
  display: flex;
`;

export const StyledContainer = styled.div<{
  $isActive: boolean;
  $size: SelectCardsSize;
}>`
  position: relative;
  width: 100%;
  background-color: white;
  border: 1px solid ${colors.gray12};

  ${({ $size }) =>
    $size === "medium"
      ? css`
          border-radius: 18px;

          ${StyledCheckContainer} {
            font-size: 30px;
          }
        `
      : $size === "small"
      ? css`
          border-radius: 10px;

          ${StyledCheckContainer} {
            font-size: 20px;
          }
        `
      : ""}

  ${({ $isActive }) =>
    $isActive &&
    css`
      background-color: ${colors.gray9};
      border: 1px solid transparent;
    `}
`;

export const StyledCheckCircleIcon = styled(CheckCircleIcon)``;

export const StyledEmptyCircle = styled(CircleIcon)`
  color: ${colors.gray3};
`;

export const StyledError = styled(Typography).attrs({
  size: 12,
  color: "red1",
})`
  margin-top: 12px;
`;
