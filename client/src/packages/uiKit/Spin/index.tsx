import { StyledSpin } from './styles';

import React, { FC, memo } from 'react';

export interface SpinProps {
  className?: string;
  style?: React.CSSProperties;
}

const _Spin: FC<SpinProps> = (props) => {
  const { ...restProps } = props;

  return <StyledSpin {...restProps} />;
};

export const Spin = memo(_Spin);
