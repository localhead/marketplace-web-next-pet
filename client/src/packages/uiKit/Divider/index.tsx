import { StyledDivider } from './styles';

import React, { FC, memo } from 'react';

export interface DividerProps {
  className?: string;
  style?: React.CSSProperties;
  margin?: [number, number];
}

const _Divider: FC<DividerProps> = (props) => {
  const { margin, style, ...restProps } = props;

  return (
    <StyledDivider
      style={{ ...style, marginTop: margin?.[0], marginBottom: margin?.[1] }}
      {...restProps}
    />
  );
};

export const Divider = memo(_Divider);
