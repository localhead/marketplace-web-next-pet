import React, { FC } from "react";

import { StyledDot, StyledDots } from "./styles";

export interface DotsProps {
  className?: string;
  style?: React.CSSProperties;

  slides: number;
  currentIndex: number;
  onChangeSlide: (dotIndex: number) => void;
}

export const Dots: FC<DotsProps> = (props) => {
  const { slides, currentIndex, onChangeSlide, ...restProps } = props;

  return (
    <StyledDots {...restProps}>
      {Array.from({ length: slides }).map((_, index) => {
        const isActive = index === currentIndex;

        return (
          <StyledDot
            key={index}
            onClick={() => onChangeSlide(index)}
            $isActive={isActive}
          />
        );
      })}
    </StyledDots>
  );
};
