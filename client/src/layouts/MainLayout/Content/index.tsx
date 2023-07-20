import { StyledContent, StyledContentHeader } from "./styles";

import { Container } from "@layouts/MainLayout/pageContentComponents/Container";
import { Breadcrumbs } from "@packages/uiKit";
import { BreadcrumbItem } from "@packages/uiKit/BreadCrumbs/type";
import React, { FC, PropsWithChildren } from "react";

export interface ContentProps extends PropsWithChildren {
  className?: string;
  style?: React.CSSProperties;
  breadcrumbs?: BreadcrumbItem[];
}

export const Content: FC<ContentProps> = (props) => {
  const { children, breadcrumbs, ...restProps } = props;

  return (
    <StyledContent {...restProps}>
      <Container>
        <StyledContentHeader>
          {breadcrumbs && <Breadcrumbs items={breadcrumbs} />}
        </StyledContentHeader>
      </Container>
      {children}
    </StyledContent>
  );
};
