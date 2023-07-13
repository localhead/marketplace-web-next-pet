import { colors, Typography } from "@packages/uiKit";
import styled, { css } from "styled-components";

export const StyledBadge = styled.div<{
  $variant: "colored" | "outlined";
  $size: "small" | "default";
  $width: "fit" | number;
}>`
  min-width: 0;

  ${({ $width }) =>
    $width === "fit"
      ? css`
          width: fit-content;
        `
      : css`
          width: ${$width}px;
        `}

  ${({ $variant }) =>
    $variant === "colored"
      ? css`
          background-color: white;
        `
      : css`
          background-color: transparent;
          border: 1px solid white;
        `}
  ${({ $size }) =>
    $size === "default"
      ? css`
          padding: 12px;
          border-radius: 16px;
        `
      : css`
          padding: 7px;
          border-radius: 10px;
        `}
`;

export const StyledValue = styled(Typography).attrs({
  weight: 700,
  lines: 1,
  ellipsis: true,
})<{ $variant: "colored" | "outlined"; $size: "small" | "default" }>`
  ${({ $variant }) =>
    $variant === "colored"
      ? css`
          color: ${colors.dark};
        `
      : css`
          color: ${colors.white};
        `}
  ${({ $size }) =>
    $size === "default"
      ? css`
          font-size: 32px;
        `
      : css`
          font-size: 26px;
        `}
`;

export const StyledDescription = styled(Typography).attrs({
  size: 12,
  lines: 1,
  weight: 400,
  ellipsis: true,
})<{ $variant: "colored" | "outlined" }>`
  ${({ $variant }) =>
    $variant === "colored"
      ? css`
          color: ${colors.dark};
        `
      : css`
          color: ${colors.white};
          opacity: 0.5;
        `}
`;
