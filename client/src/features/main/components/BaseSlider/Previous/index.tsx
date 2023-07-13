import { CaretLeftIcon } from "@packages/icons";
import { IconButton } from "@packages/uiKit";
import { IconButtonVariant } from "@packages/uiKit/IconButton/types";
import React, { FC, memo } from "react";

export interface PreviousProps {
  className?: string;
  style?: React.CSSProperties;
  onClick: () => void;

  variant?: IconButtonVariant;
}

const _Previous: FC<PreviousProps> = (props) => {
  const { onClick, variant = "primary", ...restProps } = props;

  return (
    <IconButton onClick={onClick} variant={variant} size="small" {...restProps}>
      <CaretLeftIcon size={15} />
    </IconButton>
  );
};

export const Previous = memo(_Previous);
