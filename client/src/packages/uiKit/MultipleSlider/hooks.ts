import { useCallback, useState } from 'react';

export type UseMultipleSliderParams = {
  items: number;
  itemsInRow: number;
  step: number;
  gap: number;
};
export const useMultipleSlider = (params: UseMultipleSliderParams) => {
  const { items, itemsInRow, step, gap } = params;
  const [currentOffset, setCurrentOffset] = useState(0);

  const protectedCurrentOffset = bounceOffset(currentOffset, items, itemsInRow);

  const next = useCallback(() => {
    setCurrentOffset(
      bounceOffset(protectedCurrentOffset + step, items, itemsInRow),
    );
  }, [items, itemsInRow, protectedCurrentOffset, step]);

  const prev = useCallback(() => {
    setCurrentOffset(
      bounceOffset(protectedCurrentOffset - step, items, itemsInRow),
    );
  }, [items, itemsInRow, protectedCurrentOffset, step]);

  const multipleSliderProps = {
    items,
    itemsInRow,
    currentOffset: protectedCurrentOffset,
    gap,
  };

  return {
    currentOffset,
    setCurrentOffset,
    next,
    prev,
    multipleSliderProps,
  };
};

const bounceOffset = (offset: number, items: number, itemsInRow: number) => {
  return Math.max(0, Math.min(offset, items - itemsInRow));
};
