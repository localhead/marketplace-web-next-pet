import React, { FC, memo, ReactNode } from "react";

import { StyledBadge, StyledDescription, StyledValue } from "./styles";

export interface BadgeProps {
  className?: string;
  style?: React.CSSProperties;
  value: ReactNode;
  description: string;
  variant: "colored" | "outlined";
  size?: "small" | "default";
  width?: "fit" | number;
}

const _Badge: FC<BadgeProps> = (props) => {
  const {
    value = 0,
    description,
    variant,
    size = "default",
    width = "fit",
    ...restProps
  } = props;

  return (
    <StyledBadge $variant={variant} $size={size} $width={width} {...restProps}>
      <StyledValue $variant={variant} $size={size}>
        {value}
      </StyledValue>
      <StyledDescription $variant={variant}>{description}</StyledDescription>
    </StyledBadge>
  );
};

export const Badge = memo(_Badge);
