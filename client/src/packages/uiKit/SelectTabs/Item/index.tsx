import { StyledItem, StyledLabel } from './styles';

import { CheckCircleIcon, CircleIcon } from '@packages/icons';
import { FC } from 'react';

export interface ItemProps {
  label: string;
  isActive: boolean;
  onClick?: () => void;
}

export const Item: FC<ItemProps> = (props) => {
  const { label, isActive, onClick, ...restProps } = props;

  return (
    <StyledItem
      $isActive={isActive}
      onClick={isActive ? undefined : onClick}
      {...restProps}>
      {isActive ? <CheckCircleIcon size={20} /> : <CircleIcon size={20} />}
      <StyledLabel>{label}</StyledLabel>
    </StyledItem>
  );
};
