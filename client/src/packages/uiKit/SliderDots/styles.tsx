import { colors } from "../utils";

import styled, { css } from "styled-components";

export const StyledSliderDots = styled.div``;

export const StyledDots = styled.div`
  display: flex;
  bottom: 0;
  gap: 7px;

  justify-content: center;
`;

export const StyledDot = styled.div<{
  $isActive: boolean;
}>`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  cursor: pointer;

  border: 1px solid ${colors.gray16};
  ${({ $isActive }) =>
    $isActive &&
    css`
      background-color: ${colors.dark};
      border-color: ${colors.dark};
    `}
`;

export const StyledChildrenContainer = styled.div`
  margin-bottom: 10px;
  min-width: 0;
  overflow-x: hidden;
`;

export const StyledMovable = styled.div`
  position: relative;
  display: flex;
  transition: right 0.3s ease;
  gap: 15px;
`;

export const StyledSlideContainer = styled.div`
  width: 100%;
  min-width: 100%;
`;
