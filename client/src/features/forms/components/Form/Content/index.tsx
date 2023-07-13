import { StyledContent } from './styles';

import React, { FC, PropsWithChildren } from 'react';

export interface ContentProps extends PropsWithChildren {
  className?: string;
  style?: React.CSSProperties;
}

export const Content: FC<ContentProps> = (props) => {
  const { ...restProps } = props;

  return <StyledContent {...restProps} />;
};
