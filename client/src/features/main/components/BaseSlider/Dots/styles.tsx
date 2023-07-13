import { colors } from "@packages/uiKit/utils/colors";
import styled, { css } from "styled-components";

export const StyledDots = styled.div`
  display: flex;
  gap: 7px;
`;

export const StyledDot = styled.div<{
  $isActive: boolean;
}>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  cursor: pointer;

  background-color: ${colors.gray5};
  opacity: 0.5;

  ${({ $isActive }) =>
    $isActive &&
    css`
      opacity: 1;
      background-color: ${colors.primary};
    `}
`;
