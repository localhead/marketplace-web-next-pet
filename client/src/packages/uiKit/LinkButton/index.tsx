import { CaretRightIcon } from "@packages/icons";
import React, { FC, memo, PropsWithChildren } from "react";

import { StyledLinkButton } from "./styles";

export interface LinkButtonProps extends PropsWithChildren {
  className?: string;
  style?: React.CSSProperties;
}

const _LinkButton: FC<LinkButtonProps> = (props) => {
  const { children, ...restProps } = props;

  return (
    <StyledLinkButton {...restProps}>
      <CaretRightIcon />
      {children}
    </StyledLinkButton>
  );
};

export const LinkButton = memo(_LinkButton);
