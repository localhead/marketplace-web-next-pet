import { CSSProperties } from "react";

type Params = {
  currentWidth: number;
  items: number;
  itemsInRow: number;
  gap: number;
  currentOffset: number;
};

export const getMultipleSliderGridStyle = (params: Params): CSSProperties => {
  const { currentWidth, items, itemsInRow, gap, currentOffset } = params;
  const cellWidth = (currentWidth - gap * (itemsInRow - 1)) / itemsInRow;
  const left = -currentOffset * (cellWidth + gap);

  return {
    gridTemplateColumns: `repeat(${items}, ${cellWidth}px)`,
    gap,
    left,
  };
};
