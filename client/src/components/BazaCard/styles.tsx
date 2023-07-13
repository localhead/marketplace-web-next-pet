import { media } from "@features/adaptive/breakpoints";
import { zIndexes } from "@packages/uiKit";
import Image from "next/image";
import styled, { css } from "styled-components";

export const StyledBaseCard = styled.div<{ $isSquare?: boolean }>`
  width: 100%;

  position: relative;

  ${({ $isSquare }) =>
    $isSquare &&
    css`
      width: 300px;
      aspect-ratio: 1/1;
    `}
`;

export const StyledImage = styled(Image).attrs({ width: 720, height: 375 })<{
  $size: "small" | "default" | "large";
}>`
  height: 100%;
  width: 100%;
  object-fit: cover;
  position: absolute;
  ${({ $size }) =>
    $size === "large"
      ? css`
          border-radius: 40px;
        `
      : $size === "default"
      ? css`
          border-radius: 40px;
        `
      : css`
          border-radius: 16px;
        `}
`;

export const StyledBackgroundGrad = styled.div`
  background: linear-gradient(
    280.68deg,
    rgba(18, 63, 73, 0) -2.69%,
    rgba(18, 63, 73, 0.9) 89.33%
  );
  width: 100%;
  height: 100%;
  border-radius: 40px;
  position: absolute;
  z-index: ${zIndexes.defaultMiddle};
`;

export const StyledContainer = styled.div<{
  $size: "small" | "default" | "large";
}>`
  position: relative;
  top: 0;
  z-index: ${zIndexes.defaultTop};
  ${({ $size }) =>
    $size === "default"
      ? css`
          padding: 30px;
        `
      : $size === "large"
      ? css`
          padding: 30px;
        `
      : css`
          padding: 15px;
        `}

  ${media.down("desktop")} {
    padding: 20px 22px 35px 20px;
  }
`;
