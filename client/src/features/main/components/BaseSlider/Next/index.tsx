import { CaretRightIcon } from "@packages/icons";
import { IconButton } from "@packages/uiKit";
import { IconButtonVariant } from "@packages/uiKit/IconButton/types";
import React, { FC, memo } from "react";

export interface NextProps {
  className?: string;
  style?: React.CSSProperties;
  onClick: () => void;

  variant?: IconButtonVariant;
}

const _Next: FC<NextProps> = (props) => {
  const { onClick, variant = "primary", ...restProps } = props;

  return (
    <IconButton onClick={onClick} variant={variant} size="small" {...restProps}>
      <CaretRightIcon size={15} />
    </IconButton>
  );
};

export const Next = memo(_Next);
