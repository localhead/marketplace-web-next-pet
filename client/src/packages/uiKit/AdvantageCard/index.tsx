import React, { FC, ReactNode, memo } from "react";

import { WindowWidth } from "@features/adaptive/types";
import {
  StyledAdvantageCard,
  StyledIcon,
  StyledLine,
  StyledTitle,
  StyledTopContainer,
} from "./styles";

export interface AdvantageCardProps {
  className?: string;
  style?: React.CSSProperties;

  icon: ReactNode;
  title: string;
  width: WindowWidth;
  isLastElement?: boolean;
}

const _AdvantageCard: FC<AdvantageCardProps> = (props) => {
  const { width, icon, title, isLastElement = false, ...restProps } = props;

  const isDesktop = width === "desktop";

  return (
    <StyledAdvantageCard {...restProps}>
      <StyledTopContainer>
        <StyledIcon>{icon}</StyledIcon>
        {isDesktop ? <StyledLine /> : <StyledTitle>{title}</StyledTitle>}
      </StyledTopContainer>

      {!isDesktop ? (
        !isLastElement && <StyledLine />
      ) : (
        <StyledTitle>{title}</StyledTitle>
      )}
    </StyledAdvantageCard>
  );
};

export const AdvantageCard = memo(_AdvantageCard);
