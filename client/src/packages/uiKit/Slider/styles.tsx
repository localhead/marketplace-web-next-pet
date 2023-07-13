import { zIndexes } from "../utils";

import { CaretRightIcon } from "@packages/icons";
import styled, { css } from "styled-components";

export const StyledSlider = styled.div<{
  $backgroundColor?: string;
}>`
  border-radius: 18px;
  position: relative;

  height: 340px;

  background: linear-gradient(
    90deg,
    rgba(168, 86, 86, 1) 0%,
    #c47373 37%,
    rgba(168, 86, 86, 1) 100%
  );
  backdrop-filter: blur(82px);

  ${({ $backgroundColor: backgroundColor }) =>
    backgroundColor &&
    css`
      background: ${backgroundColor};
    `}
`;

export const StyledArrowBtn = styled.button<{ $variant: "left" | "right" }>`
  height: 38px;
  width: 38px;
  border-radius: 50%;
  border: none;
  align-self: center;
  cursor: pointer;
  //margin: 40px;
  position: absolute;
  transform: translate(0%, 0%);
  z-index: ${zIndexes.defaultTop};

  ${({ $variant }) =>
    $variant === "left" &&
    css`
      top: 50%;
      left: 35px;
    `}
  ${({ $variant }) =>
    $variant === "right" &&
    css`
      top: 50%;
      right: 35px;
    `}
`;

export const StyledCaretRightIcon = styled(CaretRightIcon)<{
  direction: "left" | "right";
}>`
  ${({ direction }) =>
    direction === "left" &&
    css`
      transform: rotate(0.5turn) translate(5%, -10%);
    `}
  ${({ direction }) =>
    direction === "right" &&
    css`
      transform: translate(5%, 10%);
    `}
`;

export const StyledDots = styled.div`
  display: flex;
  bottom: 0;
  gap: 7px;
  padding-bottom: 33px;
  padding-top: 10px;
  justify-content: center;
  position: absolute;
  left: 50%;
  transform: translate(50%, 0%);
  z-index: ${zIndexes.defaultTop};
`;

export const StyledDot = styled.div<{
  $isActive: boolean;
}>`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  cursor: pointer;

  border: 1px solid #ffffff;
  opacity: 0.5;
  ${({ $isActive }) =>
    $isActive &&
    css`
      opacity: 1;
      background-color: #ffffff;
    `}
`;

export const StyledChildrenContainer = styled.div`
  margin-bottom: 10px;
  min-width: 0;
  overflow-x: hidden;
`;

export const StyledSlideContainer = styled.div`
  width: 100%;
  min-width: 100%;
`;

export const StyledMovable = styled.div`
  position: relative;
  display: flex;
  transition: right 0.3s ease;
  gap: 15px;
`;
