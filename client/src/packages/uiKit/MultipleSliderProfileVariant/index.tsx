import {
  StyledButtons,
  StyledGrid,
  StyledMultipleSliderProfileVariant,
  StyledNavContainer,
  StyledOverflowContainer,
  StyledSlideButtonLeftContainer,
  StyledSlideButtonRightContainer,
  StyledSlidesContainer,
  StyledTitle,
} from "./styles";

import { getMultipleSliderGridStyle } from "./utils";

import { Space } from "@components/Space";
import { BaseSlider } from "@features/main/components/BaseSlider";
import React, { FC, memo, ReactNode, useEffect, useRef, useState } from "react";
import { useMultipleSlider } from "./hooks";

export interface MultipleSliderProfileVariantProps {
  className?: string;
  style?: React.CSSProperties;
  items: ReactNode[];
  cols: number;
  gap?: number;
  step?: number;
}

const _MultipleSliderProfileVariant: FC<MultipleSliderProfileVariantProps> = (
  props
) => {
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
    <>
      <StyledNavContainer>
        <StyledTitle>Для вас</StyledTitle>

        <StyledButtons>
          <StyledSlideButtonRightContainer>
            <BaseSlider.Previous onClick={prev} />
          </StyledSlideButtonRightContainer>
          <StyledSlideButtonLeftContainer>
            <BaseSlider.Next onClick={next} />
          </StyledSlideButtonLeftContainer>
        </StyledButtons>
      </StyledNavContainer>
      <Space size={25} />
      <StyledMultipleSliderProfileVariant {...restProps}>
        <StyledOverflowContainer $gap={gap}>
          <StyledSlidesContainer ref={ref}>
            <StyledGrid style={gridStyles}>{items}</StyledGrid>
          </StyledSlidesContainer>
        </StyledOverflowContainer>
      </StyledMultipleSliderProfileVariant>
    </>
  );
};

export const MultipleSliderProfileVariant = memo(_MultipleSliderProfileVariant);
