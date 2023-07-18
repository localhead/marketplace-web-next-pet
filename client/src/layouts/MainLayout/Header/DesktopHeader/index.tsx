import { Container } from "@layouts/MainLayout/pageContentComponents/Container";
import {
  StyledHeader,
  StyledHeaderWrapper,
  StyledOverlay,
  StyledTopContainer,
} from "./styles";

import React, { FC, memo } from "react";
import { TopHeaderOptionsBlock } from "../components/TopHeaderOptionsBlock";

export interface DesktopHeaderProps {
  className?: string;
  style?: React.CSSProperties;
}

import { CompanyLogo } from "../components/CompanyLogo";
import { CustomerSelectorTabs } from "../components/CustomerSelectorTabs";
import { HeaderAuthenticationSection } from "../components/HeaderAuthenticationSection";

const _DesktopHeader: FC<DesktopHeaderProps> = (props) => {
  const { ...restProps } = props;

  return (
    <>
      <StyledHeaderWrapper>
        <StyledHeader {...restProps}>
          <TopHeaderOptionsBlock />
          <Container>
            <StyledTopContainer>
              <CustomerSelectorTabs />

              <CompanyLogo />

              <HeaderAuthenticationSection />
            </StyledTopContainer>
          </Container>
        </StyledHeader>
      </StyledHeaderWrapper>
      <StyledOverlay />
    </>
  );
};

export const DesktopHeader = memo(_DesktopHeader);
