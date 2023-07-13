import { IconButton } from "../IconButton";

import { media } from "@features/adaptive/breakpoints";
import { CloseIcon } from "@packages/icons";
import { Typography } from "@packages/uiKit/Typography";

import { zIndexes } from "@packages/uiKit/utils/zIndexes";

import styled, { css } from "styled-components";
import { hideScrollbarStyles } from "../utils";

export const StyledPopover = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: ${zIndexes.modal};
`;

export const StyledOverlay = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(3px);
  z-index: ${zIndexes.modalOverlay};
`;

export const StyledModal = styled.div<{
  $width: number;
  $isStretched: boolean;
}>`
  z-index: ${zIndexes.modal};
  position: absolute;
  background: white;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  max-width: calc(100% - 40px);
  ${({ $width }) =>
    $width &&
    css`
      width: ${$width}px;
    `}
  border-radius: 20px;

  padding: 55px 70px;

  ${({ $isStretched }) =>
    !$isStretched &&
    css`
      ${media.down("tablet")} {
        padding: 25px 25px;
      }
    `}

  max-height: calc(100% - 40px);

  display: flex;
  flex-direction: column;

  box-shadow: 6px 6px 54px rgba(0, 0, 0, 0.25);

  ${({ $isStretched }) =>
    $isStretched &&
    css`
      ${media.down("tablet")} {
        width: 100%;
        height: 100%;
        max-width: 100%;
        max-height: 100%;
        border-radius: 0;
        padding: 20px 30px;
      }
    `}
`;

export const StyledModalCloseButton = styled(IconButton).attrs({
  children: <CloseIcon size={16} />,
  variant: "secondary",
})`
  border-radius: 50%;
  padding: 8px;
`;

export const StyledModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  margin-bottom: 30px;
`;

export const StyledModalContent = styled.div`
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  padding-bottom: 1px;

  ${hideScrollbarStyles}
`;

export const StyledNotificationContainer = styled.div``;

export const StyledModalTitle = styled(Typography).attrs({
  size: 30,
})<{ $isStretched: boolean }>`
  flex: 1;

  ${({ $isStretched }) =>
    !$isStretched &&
    css`
      ${media.down("tablet")} {
        font-size: 28px;
      }
    `}
`;
