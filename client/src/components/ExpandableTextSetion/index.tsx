import {
  StyledContent,
  StyledExpandableTextSection,
  StyledTitle,
} from "./styles";

import { ExpandableContent } from "@packages/uiKit";
import React, { FC, memo } from "react";

export interface ExpandableTextSectionProps {
  className?: string;
  style?: React.CSSProperties;
  title: string;
  content: string;
}

const _ExpandableTextSection: FC<ExpandableTextSectionProps> = (props) => {
  const { title, content, ...restProps } = props;

  return (
    <StyledExpandableTextSection {...restProps}>
      <StyledTitle>{title}</StyledTitle>
      <ExpandableContent maxHeight={310}>
        <StyledContent>{content}</StyledContent>
      </ExpandableContent>
    </StyledExpandableTextSection>
  );
};

export const ExpandableTextSection = memo(_ExpandableTextSection);
