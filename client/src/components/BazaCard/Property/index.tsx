import React, { FC, memo, ReactNode } from "react";

import { StyledLabel, StyledProperty, StyledSmallTitle } from "./styles";

export interface PropertyProps {
  className?: string;
  style?: React.CSSProperties;
  value: ReactNode;
  label: string;

  size?: "default" | "small";
}

const _Property: FC<PropertyProps> = (props) => {
  const { value, label, size = "default", ...restProps } = props;

  return (
    <StyledProperty {...restProps}>
      <StyledLabel>{label}</StyledLabel>
      <StyledSmallTitle $size={size}>{value}</StyledSmallTitle>
    </StyledProperty>
  );
};

export const Property = memo(_Property);
