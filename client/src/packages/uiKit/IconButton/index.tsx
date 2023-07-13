import { StyledIconButton } from "./styles";
import { IconButtonSize, IconButtonVariant } from "./types";

import React, { FC } from "react";

export interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: IconButtonVariant;
  size?: IconButtonSize;
  rounded?: boolean;
}

export const IconButton: FC<IconButtonProps> = (props) => {
  const {
    size = "large",
    variant = "text",
    rounded = true,
    ...restProps
  } = props;

  return (
    <StyledIconButton
      $variant={variant}
      $size={size}
      $rounded={rounded}
      {...restProps}
    />
  );
};
