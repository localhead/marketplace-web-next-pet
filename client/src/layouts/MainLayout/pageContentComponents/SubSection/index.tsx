import React, { FC, PropsWithChildren } from "react";

import { StyledContent, StyledSectionTitle, StyledSubSection } from "./styles";

export interface SubSectionProps extends PropsWithChildren {
  className?: string;
  style?: React.CSSProperties;
  title?: string;
}

export const SubSection: FC<SubSectionProps> = (props) => {
  const { children, title, ...restProps } = props;

  return (
    <StyledSubSection {...restProps}>
      {title ? <StyledSectionTitle>{title}</StyledSectionTitle> : null}
      <StyledContent>{children}</StyledContent>
    </StyledSubSection>
  );
};
