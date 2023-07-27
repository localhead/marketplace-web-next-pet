import { Container } from "@layouts/MainLayout/pageContentComponents/Container";
import {
  StyledBottomContainer,
  StyledHeader,
  StyledHeaderWrapper,
  StyledOverlay,
  StyledProductsNavigationLinksContainer,
  StyledTopContainer,
} from "./styles";

import React, { FC, memo, useEffect, useState } from "react";
import { TopHeaderOptionsBlock } from "../components/TopHeaderOptionsBlock";

export interface DesktopHeaderProps {
  className?: string;
  style?: React.CSSProperties;
}

import { CompanyLogo } from "../components/CompanyLogo";
import { CustomerSelectorTabs } from "../components/CustomerSelectorTabs";
import { HeaderBottomDivider } from "../components/HeaderBottomDivider";
import { HeaderSearchForm } from "../components/HeaderSearchForm";
import { ProductNavigationLink } from "../components/ProductNavigationLink";
import { UserControlButtonsSection } from "../components/UserControlButtonsSection";
import { mockProductNavigationList } from "../constants";

const _DesktopHeader: FC<DesktopHeaderProps> = (props) => {
  const { ...restProps } = props;

  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  console.log(scrolled);

  return (
    <>
      <StyledHeaderWrapper>
        <StyledHeader {...restProps}>
          <TopHeaderOptionsBlock />
          <Container>
            <StyledTopContainer>
              <CustomerSelectorTabs />

              <CompanyLogo />

              <UserControlButtonsSection />
            </StyledTopContainer>
            <StyledBottomContainer>
              <StyledProductsNavigationLinksContainer>
                {mockProductNavigationList.map((item, index) => {
                  return (
                    <ProductNavigationLink
                      href={item.link}
                      key={index}
                      isFirst={index === 0 ? true : false}
                    >
                      {item.label}
                    </ProductNavigationLink>
                  );
                })}
              </StyledProductsNavigationLinksContainer>
              <HeaderSearchForm />
            </StyledBottomContainer>
          </Container>

          {scrolled && <HeaderBottomDivider />}
        </StyledHeader>
      </StyledHeaderWrapper>
      <StyledOverlay />
    </>
  );
};

export const DesktopHeader = memo(_DesktopHeader);
