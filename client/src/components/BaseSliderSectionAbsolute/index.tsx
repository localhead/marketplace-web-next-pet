import { ApiImageUrl } from "@features/api";
import { SliderDots } from "@packages/uiKit/SliderDots";
import React, { FC, memo } from "react";
import { StyledImage } from "./styles";

export interface BaseSliderSectionAbsoluteProps {
  className?: string;
  style?: React.CSSProperties;
  images: ApiImageUrl[];
}

const _BaseSliderSectionAbsolute: FC<BaseSliderSectionAbsoluteProps> = (
  props
) => {
  const { images, ...restProps } = props;

  const slides = images.map((image, index) => (
    <StyledImage key={index} src={image} alt="company photo" />
  ));

  return <SliderDots slides={slides} {...restProps} />;
};

export const BaseSliderSectionAbsolute = memo(_BaseSliderSectionAbsolute);
