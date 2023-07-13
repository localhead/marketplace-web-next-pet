import React, { FC, PropsWithChildren, ReactNode } from "react";

import { useWindowWidth } from "@features/adaptive/useWindowWidth";
import { Description } from "./Description";
import { SidebarTitle } from "./SidebarTitle";
import { Title } from "./Title";
import {
  StyledContainerWithSidebar,
  StyledMain,
  StyledSidebar,
} from "./styles";

export interface ContainerWithSideBarProps extends PropsWithChildren {
  className?: string;
  style?: React.CSSProperties;
  sidebar: ReactNode;
  width: number;
}

export const ContainerWithSideBar: FC<ContainerWithSideBarProps> & {
  Title: typeof Title;
  Description: typeof Description;
  SidebarTitle: typeof SidebarTitle;
} = (props) => {
  const { children, sidebar, width, ...restProps } = props;

  const windowWidth = useWindowWidth();

  return (
    <StyledContainerWithSidebar disablePadding {...restProps}>
      <StyledMain>{children}</StyledMain>

      {windowWidth === "desktop" && (
        <StyledSidebar $width={width}>{sidebar}</StyledSidebar>
      )}
    </StyledContainerWithSidebar>
  );
};

ContainerWithSideBar.Title = Title;
ContainerWithSideBar.SidebarTitle = SidebarTitle;
ContainerWithSideBar.Description = Description;
