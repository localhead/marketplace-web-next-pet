import { Item } from './Item';
import { StyledGrid } from './styles';

import { GridBorder } from './types';

import React, { FC } from 'react';

export interface WrapGridProps {
  className?: string;
  style?: React.CSSProperties;
  cols: number;
  gap: number;
  children: React.ReactNode;
  border?: GridBorder;
}

export const Grid: FC<WrapGridProps> = (props) => {
  const { cols, gap, children, border = 'both', ...restProps } = props;

  return (
    <StyledGrid $cols={cols} $gap={gap} {...restProps}>
      {React.Children.map(children, (child, index) => {
        const isFirstRow = index < cols;
        return (
          <Item key={index} isFirstRow={isFirstRow} border={border}>
            {child}
          </Item>
        );
      })}
    </StyledGrid>
  );
};
