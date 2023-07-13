import React, { FC, PropsWithChildren } from "react";
import { Badge } from "./Badge";
import { Property } from "./Property";

import {
  StyledBackgroundGrad,
  StyledBaseCard,
  StyledContainer,
  StyledImage,
} from "./styles";

export interface BaseCardProps extends PropsWithChildren {
  className?: string;
  style?: React.CSSProperties;
  backgroundImage?: string | undefined;
  hasGradientBackground: boolean;
  isSquare?: boolean;
  size?: "small" | "default" | "large";
}

export const BaseCard: FC<BaseCardProps> & {
  Badge: typeof Badge;
  Property: typeof Property;
} = (props) => {
  const {
    children,
    backgroundImage,
    isSquare,
    hasGradientBackground = false,
    size = "default",
    ...restProps
  } = props;

  return (
    <StyledBaseCard $isSquare={isSquare} {...restProps}>
      {hasGradientBackground && <StyledBackgroundGrad />}
      {backgroundImage && (
        <StyledImage
          src={backgroundImage}
          alt="investing card image"
          $size={size}
        />
      )}
      <StyledContainer $size={size}>{children}</StyledContainer>
    </StyledBaseCard>
  );
};

BaseCard.Badge = Badge;
BaseCard.Property = Property;
