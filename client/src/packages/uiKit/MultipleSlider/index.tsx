import { StyledGrid, StyledGridItem, StyledMultipleSlider } from "./styles";

import React, { Children, FC, memo, PropsWithChildren, useMemo } from "react";

export interface MultipleSliderProps extends PropsWithChildren {
  className?: string;
  style?: React.CSSProperties;
  itemsInRow: number;
  items: number;
  gap: number;
  currentOffset: number;
  isSquare?: boolean;
  lazy?: boolean;
}

const _MultipleSlider: FC<MultipleSliderProps> = (props) => {
  const {
    children,
    itemsInRow,
    items,
    gap,
    currentOffset,
    isSquare = false,
    lazy = true,
    ...restProps
  } = props;

  const arrayChildren = Children.toArray(children);

  const displayedItems = useMemo(() => {
    return lazy
      ? arrayChildren.slice(0, itemsInRow + currentOffset + 1)
      : arrayChildren;
  }, [arrayChildren, currentOffset, itemsInRow, lazy]);

  const gapsInRow = itemsInRow - 1;
  const cellWidthCalc = `calc(${100 / itemsInRow}% - ${
    (gapsInRow * gap) / itemsInRow
  }px)`;

  const leftCalc = `calc( ${
    ((gapsInRow * gap) / itemsInRow) * currentOffset
  }px - ${(100 / itemsInRow) * currentOffset}% - ${gap * currentOffset}px)`;

  return (
    <StyledMultipleSlider {...restProps}>
      <StyledGrid
        style={{
          left: leftCalc,
          gridTemplateColumns: `repeat(${displayedItems.length}, ${cellWidthCalc}) `,
          gap: gap,
        }}
      >
        {displayedItems.map((child, index) => {
          return (
            <StyledGridItem key={index} $isSquare={isSquare}>
              {child}
            </StyledGridItem>
          );
        })}
      </StyledGrid>
    </StyledMultipleSlider>
  );
};

export const MultipleSlider = memo(_MultipleSlider);
