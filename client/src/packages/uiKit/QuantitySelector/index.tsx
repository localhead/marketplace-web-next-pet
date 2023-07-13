import {
  MinusButton,
  PlusButton,
  StyledAmount,
  StyledQuantitySelector,
} from "./styles";

import { QuantitySelectorSize } from "./types";

import React, { FC, memo } from "react";

export interface QuantitySelectorProps {
  className?: string;
  style?: React.CSSProperties;
  value: number;
  onChange?: (quantity: number) => void;
  onDelete?: () => void;
  disabled?: boolean;
  size?: QuantitySelectorSize;
  max?: number | null;
}

const _QuantitySelector: FC<QuantitySelectorProps> = (props) => {
  const {
    value,
    onChange,
    onDelete,
    size = "medium",
    disabled,
    max,
    ...restProps
  } = props;

  const decreaseValueHandler = () => {
    if (value > 1) {
      onChange?.(value - 1);
    } else {
      onDelete?.();
    }
  };
  const increaseValueHandler = onChange
    ? () => {
        if (!max || value < max) {
          onChange(value + 1);
        }
      }
    : undefined;

  const disabledIncrement =
    max !== null && max !== undefined ? value >= max : false;

  return (
    <StyledQuantitySelector $size={size} {...restProps}>
      <MinusButton onClick={decreaseValueHandler} disabled={disabled} />
      <StyledAmount>{value}</StyledAmount>
      <PlusButton
        onClick={increaseValueHandler}
        disabled={disabled || disabledIncrement}
      />
    </StyledQuantitySelector>
  );
};

export const QuantitySelector = memo(_QuantitySelector);
