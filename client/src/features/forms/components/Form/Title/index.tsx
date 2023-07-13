import { StyledTitle } from './styles';

import React, { FC, memo, PropsWithChildren } from 'react';

export interface TitleProps extends PropsWithChildren {
  className?: string;
  style?: React.CSSProperties;
}

const _Title: FC<TitleProps> = (props) => {
  const { ...restProps } = props;

  return <StyledTitle {...restProps} />;
};

export const Title = memo(_Title);
