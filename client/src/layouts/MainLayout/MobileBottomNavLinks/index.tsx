import { NavItem } from "./NavItem";

import { StyledMobileBottomNavLinks, StyledNavList } from "./styles";

import { paths } from "@features/routering/paths";
import {
  MobNavBank,
  MobNavLayer,
  MobNavMoneys,
  MobNavStatusUp,
  MobNavWalletAdd,
} from "@packages/icons";
import React, { FC, memo } from "react";

export interface MobileBottomNavLinksProps {
  className?: string;
  style?: React.CSSProperties;
}

const _MobileBottomNavLinks: FC<MobileBottomNavLinksProps> = (props) => {
  const { ...restProps } = props;

  return (
    <StyledMobileBottomNavLinks {...restProps}>
      <StyledNavList>
        <NavItem
          href={paths.notImplemented()}
          icon={<MobNavWalletAdd />}
          label={"Option 1"}
        />
        <NavItem
          href={paths.notImplemented()}
          icon={<MobNavStatusUp />}
          label={"Option 2"}
        />
        <NavItem
          href={paths.notImplemented()}
          icon={<MobNavBank />}
          label={"Option 3"}
        />
        <NavItem
          href={paths.notImplemented()}
          icon={<MobNavMoneys />}
          label={"Option 4"}
        />
        <NavItem
          href={paths.notImplemented()}
          icon={<MobNavLayer />}
          label={"Option 5"}
        />
      </StyledNavList>
    </StyledMobileBottomNavLinks>
  );
};

export const MobileBottomNavLinks = memo(_MobileBottomNavLinks);
