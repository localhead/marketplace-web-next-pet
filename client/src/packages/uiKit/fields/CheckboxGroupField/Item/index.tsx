import { StyledItem, StyledLabel } from './styles';

import { CheckCircleIcon, CircleIcon } from '@packages/icons';
import React, { FC } from 'react';

export interface ItemProps {
  className?: string;
  style?: React.CSSProperties;
  isActive: boolean;
  label: string;
  onToggle: () => void;
}

export const Item: FC<ItemProps> = (props) => {
  const { isActive, onToggle, label, ...restProps } = props;

  const clickHandler = () => {
    onToggle();
  };

  return (
    <StyledItem {...restProps} onClick={clickHandler} $isActive={isActive}>
      {isActive ? <CheckCircleIcon size={20} /> : <CircleIcon size={20} />}

      <StyledLabel>{label}</StyledLabel>
    </StyledItem>
  );
};
