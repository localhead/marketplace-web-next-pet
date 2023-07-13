import React, { FC, PropsWithChildren } from "react";

import { useWindowWidth } from "@features/adaptive/useWindowWidth";
import { StyledContainerWide } from "./styles";

export interface ContainerWideProps extends PropsWithChildren {
  className?: string;
  style?: React.CSSProperties;
}

export const ContainerWide: FC<ContainerWideProps> = (props) => {
  const { ...restProps } = props;

  const width = useWindowWidth();

  return <StyledContainerWide $width={width} {...restProps} />;
};
