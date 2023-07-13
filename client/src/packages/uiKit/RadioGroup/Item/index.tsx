import { StyledCircle, StyledItem, StyledLabel } from './styles';

import React, { FC } from 'react';

export interface ItemProps {
  className?: string;
  style?: React.CSSProperties;
  active: boolean;
  label: string;
  onActive: () => void;
}

export const Item: FC<ItemProps> = (props) => {
  const { active, onActive, label, ...restProps } = props;

  const clickHandler = active
    ? undefined
    : () => {
        onActive();
      };

  return (
    <StyledItem {...restProps} onClick={clickHandler} $isActive={active}>
      <StyledCircle $isActive={active} />
      <StyledLabel>{label}</StyledLabel>
    </StyledItem>
  );
};
