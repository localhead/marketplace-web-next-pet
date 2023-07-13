import {
  StyledArrowBtn,
  StyledCaretRightIcon,
  StyledChildrenContainer,
  StyledDot,
  StyledDots,
  StyledMovable,
  StyledSlideContainer,
  StyledSlider,
} from "./styles";

import { useSwipeable } from "react-swipeable";

import React, { FC, PropsWithChildren, ReactNode, useState } from "react";

type SliderItem = {
  content: ReactNode;
  background: string;
};

export interface SliderProps extends PropsWithChildren {
  className?: string;
  style?: React.CSSProperties;

  backgroundColor?: string;
  slides: SliderItem[];
}

export const Slider: FC<SliderProps> = (props) => {
  const { slides, backgroundColor, ...restProps } = props;

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlideHandler = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex =
      slides !== undefined && isFirstSlide
        ? slides.length - 1
        : currentIndex - 1;

    setCurrentIndex(newIndex);
  };

  const prevSlideHandler = () => {
    const isLastSlide =
      slides !== undefined && currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;

    setCurrentIndex(newIndex);
  };

  const goToSlideHandler = (dotIndex: number) => {
    setCurrentIndex(dotIndex);
  };

  const currentSlide = slides[currentIndex] as SliderItem | undefined;

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
    <StyledSlider $backgroundColor={currentSlide?.background} {...restProps}>
      <StyledChildrenContainer {...handlers}>
        <StyledMovable style={{ right: movableRightOffset }}>
          {/* {currentSlide?.content} */}
          {slides.map((slide, index) => {
            return (
              <StyledSlideContainer key={index}>
                {slide.content}
              </StyledSlideContainer>
            );
          })}
        </StyledMovable>
      </StyledChildrenContainer>
      <StyledArrowBtn onClick={nextSlideHandler} $variant="left">
        <StyledCaretRightIcon direction="left" />
      </StyledArrowBtn>
      <StyledArrowBtn onClick={prevSlideHandler} $variant="right">
        <StyledCaretRightIcon direction="right" />
      </StyledArrowBtn>
      <StyledDots>
        {slides !== undefined &&
          slides.map((_, index) => {
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
    </StyledSlider>
  );
};
