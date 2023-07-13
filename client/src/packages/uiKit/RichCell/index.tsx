import {
  StyledDescriptionContainer,
  StyledIconContainer,
  StyledRichCell,
  StyledRight,
  StyledTitle,
} from "./styles";

import React, { FC, memo, ReactNode } from "react";

export interface RichCellProps {
  className?: string;
  style?: React.CSSProperties;
  icon?: ReactNode;
  title: string;
  description: ReactNode;
}

const _RichCell: FC<RichCellProps> = (props) => {
  const { icon, title, description, ...restProps } = props;

  return (
    <StyledRichCell {...restProps}>
      {icon ? <StyledIconContainer>{icon}</StyledIconContainer> : null}

      <StyledRight>
        <StyledTitle>{title}</StyledTitle>
        <StyledDescriptionContainer>{description}</StyledDescriptionContainer>
      </StyledRight>
    </StyledRichCell>
  );
};

export const RichCell = memo(_RichCell);
