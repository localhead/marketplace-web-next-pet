import { useWindowWidth } from "@features/adaptive/useWindowWidth";
import React, { FC, memo } from "react";
import { DesktopHeader } from "./DesktopHeader";
import { MobileHeader } from "./MobileHeader";

export interface HeaderProps {
  className?: string;
  style?: React.CSSProperties;
}

const _Header: FC<HeaderProps> = (props) => {
  const { ...restProps } = props;

  const width = useWindowWidth();

  const isDesktop = width === "desktop";

  if (isDesktop) {
    return <DesktopHeader {...restProps} />;
  }

  return <MobileHeader {...restProps} />;
};

export const Header = memo(_Header);
