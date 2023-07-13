import { StyledError } from './styles';

import React, { FC, memo } from 'react';

export interface ErrorProps {
  className?: string;
  style?: React.CSSProperties;
  error: string | null;
}

const _Error: FC<ErrorProps> = (props) => {
  const { error, ...restProps } = props;

  if (!error) {
    return null;
  }

  return <StyledError {...restProps}>{error}</StyledError>;
};

export const Error = memo(_Error);
