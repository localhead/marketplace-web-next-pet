import { CSSProperties } from 'react';

type Params = {
  currentWidth: number;
  columns: number;
  gap: number;
};

export const getSquareGridLayoutStyle = (params: Params): CSSProperties => {
  const { currentWidth, columns, gap } = params;
  const cellWidth = (currentWidth - gap * (columns - 1)) / columns;

  return {
    gridTemplateColumns: `repeat(${columns}, ${cellWidth}px)`,
    gridAutoRows: `${cellWidth}px`,
    gap,
  };
};
