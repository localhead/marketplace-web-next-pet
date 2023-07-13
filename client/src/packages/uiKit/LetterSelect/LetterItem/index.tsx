import { StyledLetterItem } from './styles';

import React, { FC, PropsWithChildren } from 'react';

export interface LetterItemProps extends PropsWithChildren {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  isActive: boolean;
}

export const LetterItem: FC<LetterItemProps> = (props) => {
  const { isActive, ...restProps } = props;

  return <StyledLetterItem $isActive={isActive} {...restProps} />;
};
