import { StyledGridAdaptive } from "./styles";

import { GridAdaptiveParam } from "./types";

import React, { FC, PropsWithChildren } from "react";

export interface WrapGridProps extends PropsWithChildren {
  className?: string;
  style?: React.CSSProperties;
  cols: GridAdaptiveParam<number>;
  columnGap?: GridAdaptiveParam<number>;
  rowGap?: GridAdaptiveParam<number>;
}

export const GridAdaptive: FC<WrapGridProps> = (props) => {
  const { cols, columnGap, rowGap, children, ...restProps } = props;

  return (
    <StyledGridAdaptive
      $cols={cols}
      $columnGap={columnGap}
      $rowGap={rowGap}
      {...restProps}
    >
      {children}
    </StyledGridAdaptive>
  );
};
