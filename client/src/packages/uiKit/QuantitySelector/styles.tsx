import { QuantitySelectorSize } from "./types";

import { IconButton } from "../IconButton";

import { MinusIcon, PlusIcon } from "@packages/icons";
import styled, { css } from "styled-components";
import { colors } from "../utils";

export const StyledIconButton = styled(IconButton)``;

export const StyledQuantitySelector = styled.div<{
  $size: QuantitySelectorSize;
}>`
  display: flex;
  align-items: center;
  background-color: white;
  border: 1px solid ${colors.gray20};
  width: fit-content;

  ${({ $size }) =>
    $size === "large"
      ? css`
          font-size: 18px;
          border-radius: 18px;
          padding: 4.5px;
          gap: 32px;

          ${StyledIconButton} {
            width: 46px;
            height: 46px;
          }
        `
      : css`
          font-size: 16px;
          border-radius: 12px;
          padding: 3.5px;
          gap: 20px;

          ${StyledIconButton} {
            width: 26px;
            height: 26px;
            border-radius: 8px;
          }
        `}
`;

export const MinusButton = styled(StyledIconButton).attrs({
  children: <MinusIcon />,
  variant: "secondary",
})``;

export const StyledAmount = styled.div``;

export const PlusButton = styled(StyledIconButton).attrs({
  children: <PlusIcon />,
  variant: "primary",
})``;
