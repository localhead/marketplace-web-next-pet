import { media } from "@features/adaptive/breakpoints";
import { PlayIcon } from "@packages/icons";
import { colors, Typography } from "@packages/uiKit";
import Image from "next/image";
import styled, { css } from "styled-components";

export const StyledVideoPlayer = styled.div`
  width: 100%;
  position: relative;
`;

export const StyledVideo = styled.video`
  width: 100%;
  border-radius: 18px;
`;

export const StyledPreviewImage = styled(Image)<{
  $isVisiblePreview: boolean;
}>`
  position: absolute;
  object-fit: cover;
  width: 100%;
  height: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  border-radius: 18px;
  ${({ $isVisiblePreview }) =>
    $isVisiblePreview &&
    css`
      display: none;
    `}
`;

export const StyledPlayButton = styled.div<{
  $isVisible: boolean;
  $size: "medium" | "large";
}>`
  gap: 22px;
  align-items: center;
  position: absolute;
  background-color: ${colors.primary};
  width: fit-content;
  border-radius: 62px;
  margin: 0 auto;
  top: 50%;
  left: 50%;

  cursor: pointer;
  padding: 15px 46px 15px 15px;
  z-index: 2;

  ${media.down("desktop")} {
    gap: 12px;
    padding: 11px 15px 11px 11px;
  }

  ${({ $isVisible }) =>
    $isVisible
      ? css`
          display: flex;
        `
      : css`
          display: none;
        `}
  ${({ $size }) =>
    $size === "large"
      ? css`
          transform: translate(-50%, -50%);
        `
      : css`
          transform: translate(-0%, -50%);
        `}
`;

export const StyledPlayIcon = styled(PlayIcon)<{
  $size?: "medium" | "large";
}>`
  display: flex;
  ${({ $size }) =>
    $size === "medium" &&
    css`
      font-size: 27px;
    `}
  ${({ $size }) =>
    $size === "large" &&
    css`
      font-size: 36px;
    `}

  ${media.down("desktop")} {
    font-size: 22px;
  }
`;

export const StyledPlayContainer = styled.div<{
  $size?: "medium" | "large";
}>`
  display: flex;

  background-color: white;
  border-radius: 50%;
  ${({ $size }) =>
    $size === "medium" &&
    css`
      padding: 10px;
    `}
  ${({ $size }) =>
    $size === "large" &&
    css`
      padding: 15px;
    `}
    
  ${media.down("desktop")} {
    padding: 9px;
  }
`;

export const StyledTitle = styled(Typography).attrs({
  size: 22,
  weight: 400,
  color: "dark",
})<{
  $size?: "medium" | "large";
}>`
  font-size: 22px;

  ${media.down("desktop")} {
    font-size: 14px;
    width: 130px;
  }
  max-width: 180px;
  ${({ $size }) =>
    $size === "medium" &&
    css`
      font-size: 15px;
      width: 90px;
    `}
`;
