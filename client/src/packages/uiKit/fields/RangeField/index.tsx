import { FieldProps } from "@packages/uiKit/Field";
import { RangeProps } from "@packages/uiKit/Range";
import React, { forwardRef, memo } from "react";
import { StyledRange, StyledRangeField, StyledValueLabel } from "./styles";

export type RangeFieldProps = RangeProps &
  Omit<FieldProps, "isFilled"> & {
    className?: string;
    style?: React.CSSProperties;
    getValueLabel?: (value: number | null) => string;
    label: string;
  };

const _RangeField = forwardRef<HTMLDivElement, RangeFieldProps>(
  (props, ref) => {
    const {
      getValueLabel,
      label,
      value,
      className,
      style,
      error,
      ...restProps
    } = props;

    const valueLabel = getValueLabel ? getValueLabel(value ?? null) : value;

    return (
      <StyledRangeField ref={ref} label={label} isFilled error={error}>
        <StyledValueLabel>{valueLabel}</StyledValueLabel>
        <StyledRange value={value} {...restProps} />
      </StyledRangeField>
    );
  }
);

_RangeField.displayName = "RangeField";

export const RangeField = memo(_RangeField);
