import { StyledImage } from "./styles";

import defaultImagePlaceholder from "@assets/imgs/imagePlaceholder.png";
import React, { FC, memo } from "react";

export interface ImageProps {
  className?: string;
  style?: React.CSSProperties;
  src?: string | null;
  imagePlaceholder?: string;
}

const _Image: FC<ImageProps> = (props) => {
  const { src, imagePlaceholder, ...restProps } = props;

  return (
    <StyledImage
      src={src ?? imagePlaceholder ?? defaultImagePlaceholder.src}
      {...restProps}
    />
  );
};

export const Image = memo(_Image);
