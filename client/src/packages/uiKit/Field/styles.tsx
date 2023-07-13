import { colors } from "../utils";

import styled, { css } from "styled-components";
import { Typography } from "../Typography";

export const StyledMiddleContainer = styled.div<{ $size: "large" | "medium" }>`
  flex: 1;
  min-width: 0;

  display: flex;
  flex-direction: column;

  ${({ $size }) =>
    $size === "large"
      ? css`
          padding: 7px 14px;
        `
      : $size === "medium"
      ? css`
          padding: 0px;
        `
      : css``}
`;

export const StyledField = styled.div<{
  $hasError: boolean;
  $variant: "outlined" | "rounded" | undefined;
}>`
  display: flex;
  border-radius: 10px;
  align-items: center;
  border: 1px solid ${colors.gray15};
  height: 100%;
  background-color: ${colors.white};

  ${({ $hasError }) =>
    $hasError &&
    css`
      border-color: ${colors.red3};
    `}
  ${({ $variant }) =>
    $variant === "rounded" &&
    css`
      border-radius: 30px;
      padding: 7px 8px;
    `}
`;

export const StyledLeftContainer = styled.div`
  align-self: center;
`;
export const StyledRightContainer = styled.div`
  align-self: center;
  padding: 0 20px;
  font-size: 20px;
  display: flex;
  align-items: center;
`;

export const StyledFieldLabel = styled(Typography).attrs({
  size: 12,
  color: "dark",
  weight: 500,
  nowrap: true,
  ellipsis: true,
})<{ $isFilled?: boolean }>`
  margin-top: 2px;
  margin-bottom: 7px;

  ${({ $isFilled }) =>
    $isFilled &&
    css`
      color: ${colors.gray24};
    `}
`;

export const StyledFieldError = styled(Typography).attrs({
  size: 12,
  color: "red1",
  nowrap: true,
  ellipsis: true,
})<{ $isFilled?: boolean }>`
  margin-top: 2px;
  margin-bottom: 7px;
`;

export const StyledControlContainer = styled.div``;
