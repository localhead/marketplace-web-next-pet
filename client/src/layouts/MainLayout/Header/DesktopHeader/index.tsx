import {
  StyledHeader,
  StyledHeaderContainer,
  StyledHeaderWrapper,
  StyledOverlay,
} from "./styles";

import React, { FC, memo } from "react";

export interface DesktopHeaderProps {
  className?: string;
  style?: React.CSSProperties;
}

const _DesktopHeader: FC<DesktopHeaderProps> = (props) => {
  const { ...restProps } = props;

  return (
    <>
      <StyledHeaderWrapper>
        <StyledHeader {...restProps}>
          <StyledHeaderContainer>Desktop Header</StyledHeaderContainer>
        </StyledHeader>
      </StyledHeaderWrapper>
      <StyledOverlay />
    </>
  );
};

export const DesktopHeader = memo(_DesktopHeader);
