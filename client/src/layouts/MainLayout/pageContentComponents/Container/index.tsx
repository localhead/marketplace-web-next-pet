import { useWindowWidth } from "@features/adaptive/useWindowWidth";
import { StyledContainer } from "./styles";

import { FC, PropsWithoutRef } from "react";

export type ContainerProps = PropsWithoutRef<JSX.IntrinsicElements["div"]> & {};

export const Container: FC<ContainerProps> = (props) => {
  const { ...restProps } = props;

  const width = useWindowWidth();

  return <StyledContainer $width={width} {...restProps} />;
};
