import { StyledFooter } from "./styles";

import { Container } from "../pageContentComponents/Container";

import { useWindowWidth } from "@features/adaptive/useWindowWidth";
import React, { FC, memo } from "react";

export interface FooterProps {
  className?: string;
  style?: React.CSSProperties;
}

const _Footer: FC<FooterProps> = (props) => {
  const { ...restProps } = props;

  const width = useWindowWidth();

  const isDesktop = width === "desktop";

  if (isDesktop) {
    return (
      <StyledFooter {...restProps}>
        <Container>Footer element</Container>
      </StyledFooter>
    );
  }

  return (
    <StyledFooter {...restProps}>
      <Container>Footer element</Container>
    </StyledFooter>
  );
};

export const Footer = memo(_Footer);
