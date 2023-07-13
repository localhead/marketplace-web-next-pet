import { StyledInputNumber } from "./InputNumber.styles";

import { InputProps } from "../Input";

import React from "react";

export interface InputNumberProps
  extends Omit<InputProps, "onChange" | "value"> {
  value?: number | null;
  maxLength?: number;
  onChange?: (value: number | null) => void;
}

export const InputNumber = React.forwardRef<HTMLInputElement, InputNumberProps>(
  (props, ref) => {
    const { onChange, maxLength, value, ...restProps } = props;

    const isValidNumber =
      value !== undefined && value !== null && !Number.isNaN(value);

    const stringValue = isValidNumber ? value?.toString() : "";

    const onChangeHandler: InputProps["onChange"] | undefined = onChange
      ? (_, e) => {
          const valueAsNumber = e.target.valueAsNumber;
          if (Number.isNaN(valueAsNumber)) {
            onChange(null);
            return;
          }

          const strLength = valueAsNumber.toString().length;

          if (maxLength) {
            strLength <= maxLength && onChange(valueAsNumber);
          } else {
            onChange(valueAsNumber);
          }
        }
      : undefined;

    return (
      <StyledInputNumber
        ref={ref}
        value={stringValue}
        onChange={onChangeHandler}
        type="number"
        {...restProps}
      />
    );
  }
);

InputNumber.displayName = "InputNumber";
