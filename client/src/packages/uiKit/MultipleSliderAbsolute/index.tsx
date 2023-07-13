import {
  StyledGrid,
  StyledMultipleSliderAbsolute,
  StyledOverflowContainer,
  StyledSlideButtonLeftContainer,
  StyledSlideButtonRightContainer,
  StyledSlidesContainer,
} from "./styles";

import { getMultipleSliderGridStyle } from "./utils";

import { BaseSlider } from "@features/main/components/BaseSlider";
import React, { FC, memo, ReactNode, useEffect, useRef, useState } from "react";
import { useMultipleSlider } from "./hooks";

export interface MultipleSliderAbsoluteProps {
  className?: string;
  style?: React.CSSProperties;
  items?: ReactNode[];
  cols: number;
  gap?: number;
  step?: number;
}

const _MultipleSliderAbsolute: FC<MultipleSliderAbsoluteProps> = (props) => {
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
    <StyledMultipleSliderAbsolute {...restProps}>
      <StyledSlideButtonLeftContainer>
        <BaseSlider.Next onClick={next} />
      </StyledSlideButtonLeftContainer>
      <StyledOverflowContainer $gap={gap}>
        <StyledSlidesContainer ref={ref}>
          <StyledGrid style={gridStyles}>{items}</StyledGrid>
        </StyledSlidesContainer>
      </StyledOverflowContainer>
      <StyledSlideButtonRightContainer>
        <BaseSlider.Previous onClick={prev} />
      </StyledSlideButtonRightContainer>
    </StyledMultipleSliderAbsolute>
  );
};

export const MultipleSliderAbsolute = memo(_MultipleSliderAbsolute);
