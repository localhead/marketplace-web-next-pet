import {
  StyledChildrenContainer,
  StyledDot,
  StyledDots,
  StyledMovable,
  StyledSlideContainer,
  StyledSliderDots,
} from "./styles";

import React, { FC, PropsWithChildren, ReactNode, useState } from "react";
import { useSwipeable } from "react-swipeable";

export interface SliderProps extends PropsWithChildren {
  className?: string;
  style?: React.CSSProperties;

  slides: ReactNode[];
}

export const SliderDots: FC<SliderProps> = (props) => {
  const { slides, ...restProps } = props;

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlideHandler = (dotIndex: number) => {
    setCurrentIndex(dotIndex);
  };

  const movableRightOffset = currentIndex
    ? `calc(${currentIndex}00% + ${currentIndex * 15}px) `
    : 0;

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      if (currentIndex < slides.length - 1) {
        setCurrentIndex((prev) => prev + 1);
      }
    },

    onSwipedRight: () => {
      if (currentIndex > 0) {
        setCurrentIndex((prev) => prev - 1);
      }
    },
  });

  return (
    <StyledSliderDots {...restProps}>
      <StyledChildrenContainer {...handlers}>
        <StyledMovable style={{ right: movableRightOffset }}>
          {slides.map((slide, index) => {
            return (
              <StyledSlideContainer key={index}>{slide}</StyledSlideContainer>
            );
          })}
        </StyledMovable>
        {/* {slides[currentIndex]} */}
      </StyledChildrenContainer>
      {slides.length > 1 && (
        <StyledDots>
          {slides.map((_, index) => {
            const isActive = index === currentIndex;

            return (
              <StyledDot
                key={index}
                onClick={() => goToSlideHandler(index)}
                $isActive={isActive}
              />
            );
          })}
        </StyledDots>
      )}
    </StyledSliderDots>
  );
};
