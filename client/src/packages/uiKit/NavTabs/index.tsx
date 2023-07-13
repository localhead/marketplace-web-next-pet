import React, { FC, memo, ReactNode } from "react";

import { useWindowWidth } from "@features/adaptive/useWindowWidth";
import { useRouter } from "next/router";
import {
  StyledNavTabs,
  StyledNavTabsItemIconContainer,
  StyledNavTabsItemLabel,
  StyledNavTabsItemNavLink,
  StyledNavTabsItemNode,
} from "./styles";

export type NavTabItem = {
  href: string;
  label: string;
  icon: ReactNode;
};
export interface NavTabsProps {
  className?: string;
  style?: React.CSSProperties;
  tabs: NavTabItem[];
  columns: number;
}

type NavTabsItemNodeProps = {
  href: string;
  pathname: string;
  label: string;
  icon: ReactNode;
};
const NavTabsItemNode: FC<NavTabsItemNodeProps> = (props) => {
  const { href, label, icon, pathname } = props;

  const width = useWindowWidth();

  const isSelected = href === pathname;

  return (
    <StyledNavTabsItemNavLink href={href}>
      <StyledNavTabsItemNode $isSelected={isSelected}>
        <StyledNavTabsItemLabel $isSelected={isSelected}>
          {label}
        </StyledNavTabsItemLabel>
        {width === "desktop" && (
          <StyledNavTabsItemIconContainer>
            {icon}
          </StyledNavTabsItemIconContainer>
        )}
      </StyledNavTabsItemNode>
    </StyledNavTabsItemNavLink>
  );
};

const _NavTabs: FC<NavTabsProps> = (props) => {
  const { columns, tabs, ...restProps } = props;

  const router = useRouter();

  return (
    <StyledNavTabs $columns={columns} {...restProps}>
      {tabs.map((tab, index) => {
        return (
          <NavTabsItemNode key={index} {...tab} pathname={router.pathname} />
        );
      })}
    </StyledNavTabs>
  );
};

export const NavTabs = memo(_NavTabs);
