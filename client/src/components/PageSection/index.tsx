import { FC, PropsWithChildren } from "react";
import { PageSectionTitle } from "./PageSectionTitle";
import { StyledPageSection, StyledPageSectionContent } from "./styles";

export interface PageSectionProps extends PropsWithChildren {
  title?: string;
  className?: string;
  style?: React.CSSProperties;
}

export const PageSection: FC<PageSectionProps> = (props) => {
  const { title, children, ...restProps } = props;

  return (
    <StyledPageSection {...restProps}>
      {title ? <PageSectionTitle title={title} /> : null}
      <StyledPageSectionContent>{children}</StyledPageSectionContent>
    </StyledPageSection>
  );
};
