import React, { FC, memo } from "react";

import ReactSlider, { ReactSliderProps } from "react-slider";
import { StyledRange } from "./styles";

export interface RangeProps
  extends Omit<ReactSliderProps, "trackClassName" | "thumbClassName"> {
  className?: string;
  style?: React.CSSProperties;
}

const _Range: FC<RangeProps> = (props) => {
  const { className, style, ...restProps } = props;

  return (
    <StyledRange className={className} style={style}>
      <ReactSlider
        trackClassName="react-slider__track"
        thumbClassName="react-slider__thumb"
        {...restProps}
      />
    </StyledRange>
  );
};

export const Range = memo(_Range);
