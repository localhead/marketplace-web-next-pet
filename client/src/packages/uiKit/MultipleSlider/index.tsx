import {
  StyledGrid,
  StyledMultipleSlider,
  StyledOverflowContainer,
  StyledSlideButtonContainer,
  StyledSlidesContainer,
} from "./styles";

import { getMultipleSliderGridStyle } from "./utils";

import { BaseSlider } from "@features/main/components/BaseSlider";
import React, { FC, memo, ReactNode, useEffect, useRef, useState } from "react";
import { useMultipleSlider } from "./hooks";

export interface MultipleSliderProps {
  className?: string;
  style?: React.CSSProperties;
  items?: ReactNode[];
  cols: number;
  gap?: number;
  step?: number;
}

const _MultipleSlider: FC<MultipleSliderProps> = (props) => {
  const { items, cols, gap = 0, step = 1, ...restProps } = props;

  const ref = useRef<HTMLDivElement | null>(null);

  const [currentWidth, setCurrentWidth] = useState(0);

  useEffect(() => {
    const resizeCallback: ResizeObserverCallback = (entries) => {
      if (entries.length > 0) {
        const entry = entries[0];
        setCurrentWidth(entry.contentRect.width);
      }
    };
    const ro = new ResizeObserver(resizeCallback);

    if (ref.current) {
      ro.observe(ref.current);
    }

    return () => {
      ro.disconnect();
    };
  }, []);

  const itemsLength = items?.length ?? 0;

  const { currentOffset, next, prev } = useMultipleSlider({
    gap,
    items: itemsLength,
    itemsInRow: cols,
    step,
  });

  const gridStyles = getMultipleSliderGridStyle({
    gap,
    currentWidth,
    itemsInRow: cols,
    currentOffset,
    items: itemsLength,
  });

  return (
    <StyledMultipleSlider {...restProps}>
      <StyledSlideButtonContainer>
        <BaseSlider.Previous onClick={prev} />
      </StyledSlideButtonContainer>
      <StyledOverflowContainer $gap={gap}>
        <StyledSlidesContainer ref={ref}>
          <StyledGrid style={gridStyles}>{items}</StyledGrid>
        </StyledSlidesContainer>
      </StyledOverflowContainer>
      <StyledSlideButtonContainer>
        <BaseSlider.Next onClick={next} />
      </StyledSlideButtonContainer>
    </StyledMultipleSlider>
  );
};

export const MultipleSlider = memo(_MultipleSlider);
