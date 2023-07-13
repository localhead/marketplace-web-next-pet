import { useMemo } from 'react';

export type UsePaginationParams = {
  totalCount: number;
  siblingCount?: number;
  currentPage: number;
};

const range = (start: number, end: number) => {
  let length = end - start + 1;
  /*
        Create an array of certain length and set the elements within it from
      start value to end value.
    */
  return Array.from({ length }, (_, idx) => idx + start);
};

const DOTS = 'dots' as const;

export const usePagination = (params: UsePaginationParams) => {
  const { totalCount, siblingCount = 1, currentPage } = params;

  const paginationRange = useMemo(() => {
    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    const rightSiblingIndex = Math.min(currentPage + siblingCount, totalCount);

    /*
      We do not show dots just when there is just one page number to be inserted between the extremes of sibling and the page limits i.e 1 and totalCount. Hence we are using leftSiblingIndex > 2 and rightSiblingIndex < totalCount - 2
    */
    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRightDots = rightSiblingIndex < totalCount - 2;

    const firstPageIndex = 1;
    const lastPageIndex = totalCount;

    if (!shouldShowLeftDots && !shouldShowRightDots) {
      return range(firstPageIndex, lastPageIndex);
    }

    /*
    	Case 2: No left dots to show, but rights dots to be shown
    */
    if (!shouldShowLeftDots && shouldShowRightDots) {
      let leftItemCount = rightSiblingIndex;
      let leftRange = range(1, leftItemCount);

      return [...leftRange, DOTS, totalCount];
    }

    /*
    	Case 3: No right dots to show, but left dots to be shown
    */
    if (shouldShowLeftDots && !shouldShowRightDots) {
      let rightRange = range(leftSiblingIndex, totalCount);
      return [firstPageIndex, DOTS, ...rightRange];
    }

    /*
    	Case 4: Both left and right dots to be shown
    */
    let middleRange = range(leftSiblingIndex, rightSiblingIndex);
    return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
  }, [totalCount, siblingCount, currentPage]);

  return paginationRange;
};
