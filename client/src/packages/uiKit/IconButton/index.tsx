import { StyledIconButton } from './styles';
import { IconButtonVariant } from './types';

import React, { FC } from 'react';

export interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: IconButtonVariant;
}

export const IconButton: FC<IconButtonProps> = (props) => {
  const { variant = 'text', ...restProps } = props;

  return <StyledIconButton $variant={variant} {...restProps} />;
};
