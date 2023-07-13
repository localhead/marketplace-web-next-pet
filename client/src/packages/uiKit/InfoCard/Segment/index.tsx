import {
  StyledContent,
  StyledIconContainer,
  StyledMain,
  StyledSegment,
  StyledTitle,
} from './styles';

import { InfoCartVariant } from './types';

import React, { FC, PropsWithChildren, ReactNode } from 'react';

export interface SegmentProps extends PropsWithChildren {
  className?: string;
  style?: React.CSSProperties;
  icon?: ReactNode;
  variant?: InfoCartVariant;
  title: string;
}

export const Segment: FC<SegmentProps> = (props) => {
  const { icon, variant = 'primary', title, children, ...restProps } = props;

  return (
    <StyledSegment {...restProps}>
      {icon ? (
        <StyledIconContainer $variant={variant}>{icon}</StyledIconContainer>
      ) : null}
      <StyledMain>
        <StyledTitle>{title}</StyledTitle>
        <StyledContent>{children}</StyledContent>
      </StyledMain>
    </StyledSegment>
  );
};
