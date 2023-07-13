import { StyledItem } from './styles';

import { GridBorder } from '../types';

import React, { FC, PropsWithChildren } from 'react';

export interface ItemProps extends PropsWithChildren {
  className?: string;
  style?: React.CSSProperties;
  isFirstRow: boolean;
  border: GridBorder;
}

export const Item: FC<ItemProps> = (props) => {
  const { isFirstRow, border, ...restProps } = props;
  return (
    <StyledItem $isFirstRow={isFirstRow} $border={border} {...restProps} />
  );
};
