import { StyledButtonsContainer } from "./styles";

import React, { FC, PropsWithChildren } from "react";

export interface ButtonsContainerProps extends PropsWithChildren {
  className?: string;
  style?: React.CSSProperties;
}

export const ButtonsContainer: FC<ButtonsContainerProps> = (props) => {
  const { ...restProps } = props;

  return <StyledButtonsContainer {...restProps} />;
};
