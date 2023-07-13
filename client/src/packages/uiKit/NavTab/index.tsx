import React, { FC, memo, ReactNode } from "react";
import {
  StyledNavTabsItemIconContainer,
  StyledNavTabsItemLabel,
  StyledNavTabsItemNavLink,
  StyledNavTabsItemNode,
} from "./styles";

export interface NavTabProps {
  className?: string;
  style?: React.CSSProperties;

  label: string;
  icon: ReactNode;
  isSelected: boolean;
  onClick: (() => void) | undefined;
}

const _NavTab: FC<NavTabProps> = (props) => {
  const { onClick, label, icon, isSelected } = props;

  return (
    <StyledNavTabsItemNavLink onClick={onClick} $isSelected={isSelected}>
      <StyledNavTabsItemNode>
        <StyledNavTabsItemLabel>{label}</StyledNavTabsItemLabel>
        <StyledNavTabsItemIconContainer>{icon}</StyledNavTabsItemIconContainer>
      </StyledNavTabsItemNode>
    </StyledNavTabsItemNavLink>
  );
};

export const NavTab = memo(_NavTab);
