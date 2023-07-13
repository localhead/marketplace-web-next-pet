import {
  StyledContent,
  StyledHeader,
  StyledRight,
  StyledSection,
  StyledTitle,
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
            {title && <StyledTitle>{title}</StyledTitle>}
            {right && <StyledRight>{right}</StyledRight>}
          </StyledHeader>
        </Container>
      )}

      <StyledContent>{children}</StyledContent>
    </StyledSection>
  );
});

_Section.displayName = "Section";

export const Section = memo(_Section);
