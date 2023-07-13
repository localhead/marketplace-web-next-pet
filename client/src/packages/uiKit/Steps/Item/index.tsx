import {
  StyledDescription,
  StyledIconContainer,
  StyledItem,
  StyledLine,
  StyledNumber,
  StyledTitle,
  StyledTitleContainer,
} from './styles';

import React, { FC, memo, ReactNode } from 'react';

export interface ItemProps {
  className?: string;
  style?: React.CSSProperties;
  number: number;
  title: string;
  icon: ReactNode;
  description: string;
  isLast: boolean;
}

const _Item: FC<ItemProps> = (props) => {
  const { number, title, icon, description, isLast, ...restProps } = props;

  return (
    <StyledItem {...restProps}>
      <StyledNumber>
        {number.toLocaleString('en-US', {
          minimumIntegerDigits: 2,
        })}
      </StyledNumber>
      <StyledTitleContainer>
        <StyledTitle>{title}</StyledTitle>
      </StyledTitleContainer>
      <StyledIconContainer>{icon}</StyledIconContainer>
      <StyledLine $isLast={isLast} />
      <StyledDescription>{description}</StyledDescription>
    </StyledItem>
  );
};

export const Item = memo(_Item);
