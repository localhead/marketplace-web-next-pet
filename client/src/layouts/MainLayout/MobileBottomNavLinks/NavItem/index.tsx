import {
  StyledLabel,
  StyledNavIconContainer,
  StyledNavItem,
  StyledNavLink,
} from "./styles";

import { Href } from "@features/routering/types";
import React, { FC, memo, ReactNode } from "react";

export interface NavItemProps {
  className?: string;
  style?: React.CSSProperties;
  icon: ReactNode;
  label: string;
  href?: Href;
}

const _NavItem: FC<NavItemProps> = (props) => {
  const { icon, label, href, ...restProps } = props;

  if (!href) {
    return (
      <StyledNavItem {...restProps}>
        <StyledNavIconContainer>{icon}</StyledNavIconContainer>
        <StyledLabel>{label}</StyledLabel>
      </StyledNavItem>
    );
  }

  return (
    <StyledNavLink href={href} {...restProps}>
      <StyledNavIconContainer>{icon}</StyledNavIconContainer>
      <StyledLabel>{label}</StyledLabel>
    </StyledNavLink>
  );
};

export const NavItem = memo(_NavItem);
