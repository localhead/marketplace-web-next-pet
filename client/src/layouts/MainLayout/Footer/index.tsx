import { StyledFooter } from "./styles";

import { Container } from "../pageContentComponents/Container";

import { Space } from "@components/Space";
import { useWindowWidth } from "@features/adaptive/useWindowWidth";
import React, { FC, memo } from "react";
import { FooterBottomLineSection } from "./components/FooterBottomLineSection";
import { FooterMainSections } from "./components/FooterMainSections";

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
        <Container>
          <FooterMainSections />
          <Space size={60} />
          <FooterBottomLineSection />
        </Container>
      </StyledFooter>
    );
  }

  return (
    <StyledFooter {...restProps}>
      <Container></Container>
    </StyledFooter>
  );
};

export const Footer = memo(_Footer);
