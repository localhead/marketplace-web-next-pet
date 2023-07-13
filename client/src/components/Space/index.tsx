import { useAdaptiveParam } from "@features/adaptive/useAdaptiveParam";
import React, { FC, memo } from "react";

import { StyledSpace } from "./styles";

export interface SpaceProps {
  className?: string;
  style?: React.CSSProperties;
  size: number;
  tablet?: number;
  mobile?: number;
}

const _Space: FC<SpaceProps> = (props) => {
  const { size, tablet, mobile, ...restProps } = props;

  const height = useAdaptiveParam({
    desktop: size,
    tablet,
    mobile,
  });

  return <StyledSpace style={{ height }} {...restProps} />;
};

export const Space = memo(_Space);
