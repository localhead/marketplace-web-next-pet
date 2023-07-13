import { StyledButton, StyledIconContainer } from './styles';
import { ButtonIconPosition, ButtonSize, ButtonVariant } from './types';

import React, { FC, PropsWithChildren, ReactNode } from 'react';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: ButtonSize;
  variant?: ButtonVariant;
  block?: boolean;
  icon?: ReactNode;
  iconPosition?: ButtonIconPosition;
  disabled?: boolean;
}

export const Button: FC<PropsWithChildren<ButtonProps>> = (props) => {
  const {
    size = 'medium',
    variant = 'primary',
    block = false,
    icon,
    iconPosition = 'right',
    children,
    ...restProps
  } = props;

  return (
    <StyledButton
      $size={size}
      $variant={variant}
      $block={block}
      $hasIcon={Boolean(icon)}
      $iconPosition={iconPosition}
      {...restProps}>
      {iconPosition === 'left' && (
        <StyledIconContainer>{icon}</StyledIconContainer>
      )}
      {children}
      {iconPosition === 'right' && (
        <StyledIconContainer>{icon}</StyledIconContainer>
      )}
    </StyledButton>
  );
};
