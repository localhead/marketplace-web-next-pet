import { StyledChip } from './styles';

import React, { FC, memo, PropsWithChildren } from 'react';

export interface ChipProps extends PropsWithChildren {
  className?: string;
  style?: React.CSSProperties;
}

const _Chip: FC<ChipProps> = (props) => {
  const { children, ...restProps } = props;

  return <StyledChip {...restProps}>{children}</StyledChip>;
};

export const Chip = memo(_Chip);
