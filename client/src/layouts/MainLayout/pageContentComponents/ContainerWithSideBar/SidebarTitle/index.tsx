import React, { FC, PropsWithChildren, memo } from "react";

import { StyledSidebarTitle } from "./styles";

export interface SidebarTitleProps extends PropsWithChildren {
  className?: string;
  style?: React.CSSProperties;
}

const _SidebarTitle: FC<SidebarTitleProps> = (props) => {
  const { children, ...restProps } = props;

  return <StyledSidebarTitle {...restProps}>{children}</StyledSidebarTitle>;
};

export const SidebarTitle = memo(_SidebarTitle);
