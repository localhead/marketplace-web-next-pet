import { StyledMobileHeader } from "./styles";

import React, { FC, memo } from "react";

export interface MobileHeaderProps {
  className?: string;
  style?: React.CSSProperties;
}

const _MobileHeader: FC<MobileHeaderProps> = (props) => {
  const { ...restProps } = props;

  return <StyledMobileHeader {...restProps}>Mobile Header</StyledMobileHeader>;
};

export const MobileHeader = memo(_MobileHeader);
