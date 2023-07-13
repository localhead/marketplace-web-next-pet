import React, { FC, PropsWithChildren } from "react";
import { Dots } from "./Dots";
import { Next } from "./Next";
import { Previous } from "./Previous";
import { StyledBaseSlider } from "./styles";

export interface BaseSliderProps extends PropsWithChildren {
  className?: string;
  style?: React.CSSProperties;
}

export const BaseSlider: FC<BaseSliderProps> & {
  Dots: typeof Dots;
  Previous: typeof Previous;
  Next: typeof Next;
} = (props) => {
  const { children, ...restProps } = props;

  return <StyledBaseSlider {...restProps}>{children}</StyledBaseSlider>;
};

BaseSlider.Dots = Dots;
BaseSlider.Previous = Previous;
BaseSlider.Next = Next;
