import React, { FC, memo, ReactNode } from "react";

import {
  StyledDescription,
  StyledIconContainer,
  StyledIconInfo,
  StyledTitle,
} from "./styles";

export interface IconInfoProps {
  className?: string;
  style?: React.CSSProperties;
  icon: ReactNode;
  title: string;
  description: string;
}

const _IconInfo: FC<IconInfoProps> = (props) => {
  const { icon, title, description, ...restProps } = props;

  return (
    <StyledIconInfo {...restProps}>
      <StyledIconContainer>{icon}</StyledIconContainer>
      <StyledTitle>{title}</StyledTitle>
      <StyledDescription>{description}</StyledDescription>
    </StyledIconInfo>
  );
};

export const IconInfo = memo(_IconInfo);
