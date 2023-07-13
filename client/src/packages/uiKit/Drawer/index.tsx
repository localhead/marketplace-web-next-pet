import {
  StyledCloseButton,
  StyledContent,
  StyledDrawer,
  StyledHeader,
  StyledOverlay,
  StyledPopover,
  StyledTitle,
} from './styles';

import { useDisableBodyScroll } from '../hooks';

import { PopoverPortal } from '../PopoverPortal';

import React, { FC, memo, PropsWithChildren } from 'react';

export interface DrawerProps extends PropsWithChildren {
  className?: string;
  style?: React.CSSProperties;

  title: string;
  isOpen: boolean;

  onClose?: () => void;
  width?: number;
}

const RenderedDrawer: FC<DrawerProps> = (props) => {
  const { children, onClose, title, isOpen, width } = props;

  useDisableBodyScroll(isOpen);

  return (
    <PopoverPortal>
      <StyledPopover>
        <StyledOverlay onClick={onClose} />
        <StyledDrawer $width={width}>
          <StyledHeader>
            <StyledTitle>{title}</StyledTitle>
            <StyledCloseButton onClick={onClose} />
          </StyledHeader>
          <StyledContent>{children}</StyledContent>
        </StyledDrawer>
      </StyledPopover>
    </PopoverPortal>
  );
};

const _Drawer: FC<DrawerProps> = (props) => {
  const { isOpen, ...restProps } = props;

  if (!isOpen) return null;

  return <RenderedDrawer isOpen={true} {...restProps} />;
};

export const Drawer = memo(_Drawer);
