import React, { FC, memo } from "react";

import { StyledPageSectionTitle, StyledTitle } from "./styles";

export interface PageSectionTitleProps {
  className?: string;
  style?: React.CSSProperties;
  title: string;
}

const _PageSectionTitle: FC<PageSectionTitleProps> = (props) => {
  const { title, ...restProps } = props;

  return (
    <StyledPageSectionTitle {...restProps}>
      <StyledTitle>{title}</StyledTitle>
    </StyledPageSectionTitle>
  );
};

export const PageSectionTitle = memo(_PageSectionTitle);
