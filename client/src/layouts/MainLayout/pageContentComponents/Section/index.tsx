import {
  StyledContent,
  StyledHeader,
  StyledRight,
  StyledSection,
  StyledTitleH2,
} from "./styles";

import { Container } from "@layouts/MainLayout/pageContentComponents/Container";
import React, { forwardRef, memo, PropsWithChildren, ReactNode } from "react";

export interface SectionProps extends PropsWithChildren {
  className?: string;
  style?: React.CSSProperties;
  title?: ReactNode;
  right?: ReactNode;
}

const _Section = forwardRef<HTMLElement, SectionProps>((props, ref) => {
  const { title, right, children, ...restProps } = props;

  return (
    <StyledSection ref={ref} {...restProps}>
      {(title || right) && (
        <Container>
          <StyledHeader>
            {title && <StyledTitleH2>{title}</StyledTitleH2>}
            {right && <StyledRight>{right}</StyledRight>}
          </StyledHeader>
        </Container>
      )}
      <Container>
        <StyledContent>{children}</StyledContent>
      </Container>
    </StyledSection>
  );
});

_Section.displayName = "Section";

export const Section = memo(_Section);
