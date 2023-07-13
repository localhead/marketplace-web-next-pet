import { Container } from "../pageContentComponents/Container";

import { NavigationArrowIcon } from "@packages/icons";
import { Button, colors, zIndexes } from "@packages/uiKit";
import styled, { css } from "styled-components";

export const StyledHeader = styled.div<{ showSeparator: boolean }>`
  padding: 25px 0px 0px;
  position: relative;
  //background-color: ${colors.white};

  ${({ showSeparator }) =>
    showSeparator &&
    css`
      border-bottom: 1px solid #f2f2f2;
    `}
`;

export const StyledHeaderContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const StyledTop = styled.div`
  display: flex;
  gap: 21px;
`;

export const StyledTopLeft = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledTopRight = styled.div`
  min-width: 0;
  flex: 1;
  display: flex;
  justify-content: flex-end;
  gap: 21px;
`;

export const StyledNavList = styled.div`
  min-width: 0;
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-end;
  gap: 23px;
`;

export const StyledControls = styled.div`
  display: flex;
  gap: 18px;
`;

export const StyledRightButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const StyledMenuContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledDeliveryButton = styled(Button).attrs({
  size: "extra-small",
  variant: "outlined",
  icon: <NavigationArrowIcon size={12} />,
  iconPosition: "left",
})``;

export const StyledBottom = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const LogoContainer = styled.div`
  margin-right: 28px;
`;

export const StyledCatalogButton = styled(Button).attrs({
  size: "large",
  variant: "primary",
  iconPosition: "left",
})<{ $isOpen: boolean }>`
  margin-right: 12px;

  ${({ $isOpen }) =>
    $isOpen &&
    css`
      background-color: ${colors.dark};
      border-color: ${colors.dark};
      color: ${colors.white};

      :hover {
        background-color: ${colors.dark};
        border-color: ${colors.dark};
        color: ${colors.white};
      }
    `}
`;

export const StyledOverlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: none;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: ${zIndexes.modalOverlay};
`;
export const StyledHeaderWrapper = styled.div``;

export const StyledModalWrapper = styled.div<{ $isOpenAsModal: boolean }>`
  ${({ $isOpenAsModal }) =>
    $isOpenAsModal &&
    css`
      position: fixed;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      z-index: ${zIndexes.modalOverlay};

      ${StyledOverlay} {
        display: block;
      }
      ${StyledHeaderWrapper} {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        z-index: ${zIndexes.modal};
      }
    `}
`;

export const StyledHeaderPlaceholder = styled.div<{ $isDisplay: boolean }>`
  ${({ $isDisplay }) =>
    $isDisplay
      ? css`
          display: block;
        `
      : css`
          display: none;
        `}
`;
