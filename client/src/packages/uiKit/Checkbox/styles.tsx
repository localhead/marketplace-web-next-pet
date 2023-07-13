import { colors } from "@packages/uiKit";
import { Typography } from "@packages/uiKit/Typography";
import styled, { css } from "styled-components";

export const StyledItem = styled.div<{ $isActive: boolean }>`
  display: flex;
  align-items: center;
  gap: 9px;
  cursor: pointer;
  width: fit-content;
`;

export const StyledCircle = styled.div<{
  $isActive: boolean;
  $isError?: boolean;
}>`
  width: 16px;
  height: 16px;
  min-width: 16px;
  border-radius: 50%;
  display: flex;
  padding: 0.5px;

  border: 1px solid transparent;

  ${({ $isActive }) =>
    $isActive
      ? css`
          background-color: ${colors.dark};
          color: ${colors.white};
        `
      : css`
          border: 1px solid ${colors.gray3};
        `}

  ${({ $isError }) =>
    $isError &&
    css`
      border-color: ${colors.danger};
    `}
`;

export const StyledLabel = styled(Typography).attrs({
  size: 12,
  forwardedAs: "div",
})`
  user-select: none;
`;
