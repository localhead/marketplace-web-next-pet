import {
  StyledModal,
  StyledModalCloseButton,
  StyledModalContent,
  StyledModalHeader,
  StyledModalTitle,
  StyledOverlay,
  StyledPopover,
} from './styles';

import { useDisableBodyScroll } from '../hooks';

import { PopoverPortal } from '@packages/uiKit/PopoverPortal';
import React, { FC, PropsWithChildren } from 'react';

export interface ModalProps extends PropsWithChildren {
  className?: string;
  styles?: React.CSSProperties;

  title: string;

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

  return (
    <PopoverPortal>
      <StyledPopover>
        <StyledOverlay onClick={onClose} />
        <StyledModal $width={width} $isStretched={isStretched}>
          <StyledModalHeader>
            <StyledModalTitle $isStretched={isStretched}>
              {title}
            </StyledModalTitle>
            <StyledModalCloseButton onClick={onClose} />
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
