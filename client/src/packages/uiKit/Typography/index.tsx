import { StyledTypography } from "./styles";

import { AppColor, colors } from "@packages/uiKit/utils/colors";
import { PropsWithChildren } from "react";

export type TypographyProps = PropsWithChildren &
  React.PropsWithoutRef<JSX.IntrinsicElements["p"]> & {
    size?: number;
    color?: AppColor;
    weight?: 300 | 400 | 500 | 700;
    lineHeightMultiplier?: number;
    nowrap?: boolean;
    ellipsis?: boolean;
    as?: keyof JSX.IntrinsicElements;
    maxLines?: number;
    lines?: number;
    title?: string;
  };

export const Typography = (props: TypographyProps) => {
  const {
    size,
    color,
    weight,
    lineHeightMultiplier = 1.2,
    nowrap = false,
    ellipsis = false,
    maxLines,
    lines,
    ...restProps
  } = props;

  const _color = color && colors[color];

  return (
    <StyledTypography
      $size={size}
      $color={_color}
      $weight={weight}
      $lineHeightMultiplier={lineHeightMultiplier}
      $nowrap={nowrap}
      $ellipsis={ellipsis}
      $maxLines={maxLines}
      $lines={lines}
      {...restProps}
    />
  );
};
