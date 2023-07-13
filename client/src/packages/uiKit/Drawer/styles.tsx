import { IconButton } from "../IconButton";
import { Typography } from "../Typography";
import { hideScrollbarStyles, zIndexes } from "../utils";

import { media } from "@features/adaptive/breakpoints";
import { CloseIcon } from "@packages/icons";
import styled from "styled-components";

export const StyledDrawer = styled.div<{ $width?: number }>`
  position: absolute;
  right: 0;
  top: 0;
  right: 0;
  height: 100%;
  width: ${({ $width }) => `${$width ?? 500}px`};
  max-width: 100%;
  background: white;
  z-index: ${zIndexes.modal};
  padding: 43px 64px;
  display: flex;
  flex-direction: column;

  ${media.down("tablet")} {
    left: 0;
    width: 100%;
    padding: 22px 20px;
  }
`;

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

export const StyledCloseButton = styled(IconButton).attrs({
  children: <CloseIcon size={16} />,
  variant: "secondary",
})`
  border-radius: 50%;
  padding: 8px;
`;

export const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  margin-bottom: 25px;
`;

export const StyledTitle = styled(Typography).attrs({
  size: 30,
})`
  flex: 1;
`;

export const StyledContent = styled.div`
  flex: 1;
  overflow-y: auto;
  padding-bottom: 1px;

  ${hideScrollbarStyles}
`;
