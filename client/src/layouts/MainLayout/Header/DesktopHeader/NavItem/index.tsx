import { StyledNavItem } from "./styles";

import { Href } from "@features/routering/types";
import React, { FC, memo, PropsWithChildren } from "react";

export interface NavItemProps extends PropsWithChildren {
  className?: string;
  style?: React.CSSProperties;
  href: Href;
}

const _NavItem: FC<NavItemProps> = (props) => {
  const { ...restProps } = props;

  return <StyledNavItem {...restProps} />;
};

export const NavItem = memo(_NavItem);
