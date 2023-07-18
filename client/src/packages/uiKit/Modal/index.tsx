import {
  StyledModal,
  StyledModalCloseButton,
  StyledModalContent,
  StyledModalHeader,
  StyledModalTitle,
  StyledOverlay,
  StyledPopover,
} from "./styles";

import { useDisableBodyScroll } from "../hooks";

import { useWindowWidth } from "@features/adaptive/useWindowWidth";
import { CaretLeftIcon } from "@packages/icons";
import { PopoverPortal } from "@packages/uiKit/PopoverPortal";
import React, { FC, PropsWithChildren } from "react";

export interface ModalProps extends PropsWithChildren {
  className?: string;
  styles?: React.CSSProperties;

  title?: string;

  isOpen: boolean;
  width?: number;
  isStretched?: boolean;

  onClose?: () => void;
}

const RenderedModal: FC<ModalProps> = (props) => {
  const {
    children,

    isOpen,
    onClose,
    title,

    isStretched = true,

    width = 1000,
  } = props;

  useDisableBodyScroll(isOpen);

  const windowWidth = useWindowWidth();

  const isDesktop = windowWidth === "desktop";
  const isMobile = windowWidth === "mobile";

  return (
    <PopoverPortal>
      <StyledPopover>
        <StyledOverlay onClick={onClose} />
        <StyledModal $width={width} $isStretched={isStretched}>
          <StyledModalHeader>
            {isMobile && <CaretLeftIcon size={20} onClick={onClose} />}
            <StyledModalTitle $isStretched={isStretched}>
              {title}
            </StyledModalTitle>
            {!isMobile && <StyledModalCloseButton onClick={onClose} />}
          </StyledModalHeader>
          <StyledModalContent>{children}</StyledModalContent>
        </StyledModal>
      </StyledPopover>
    </PopoverPortal>
  );
};

export const Modal: FC<ModalProps> = (props) => {
  const { isOpen, ...restProps } = props;

  if (!isOpen) return null;

  return <RenderedModal isOpen={true} {...restProps} />;
};
