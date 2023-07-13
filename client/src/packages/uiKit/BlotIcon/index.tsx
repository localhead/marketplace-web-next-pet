import { StyledBlotIcon, StyledIcon } from './styles';

import React, { FC, memo, ReactNode } from 'react';

export interface BlotIconProps {
  className?: string;
  style?: React.CSSProperties;

  icon: ReactNode;
}

const _BlotIcon: FC<BlotIconProps> = (props) => {
  const { icon, ...restProps } = props;

  return (
    <StyledBlotIcon {...restProps}>
      <StyledIcon>{icon}</StyledIcon>
    </StyledBlotIcon>
  );
};

export const BlotIcon = memo(_BlotIcon);
