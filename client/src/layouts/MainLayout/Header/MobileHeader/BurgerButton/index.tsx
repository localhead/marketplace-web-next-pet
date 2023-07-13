import { StyledBurgerButton } from './styles';

import { CloseIcon, ListIcon } from '@packages/icons';
import React, { FC, memo } from 'react';

export interface BurgerButtonProps {
  className?: string;
  style?: React.CSSProperties;

  isOpen: boolean;
  onClick?: () => void;
}

const _BurgerButton: FC<BurgerButtonProps> = (props) => {
  const { isOpen, ...restProps } = props;

  return (
    <StyledBurgerButton $isOpen={isOpen} variant="secondary" {...restProps}>
      {isOpen ? <CloseIcon size={20} /> : <ListIcon size={20} />}
    </StyledBurgerButton>
  );
};

export const BurgerButton = memo(_BurgerButton);
