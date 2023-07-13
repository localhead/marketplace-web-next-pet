import { StyledInput } from "./styles";

import { Field, FieldProps } from "@packages/uiKit/Field";
import React, { InputHTMLAttributes, forwardRef, memo, useMemo } from "react";

export interface InputFieldProps extends Omit<FieldProps, "children"> {
  value?: string | null;
  onChange?: (value: string | null) => void;
  placeholder?: string;
  inputProps?: InputHTMLAttributes<HTMLInputElement>;
}

const _InputField = forwardRef<HTMLDivElement, InputFieldProps>(
  (props, ref) => {
    const { value, onChange, placeholder, inputProps, ...restProps } = props;

    const changeHandler:
      | React.ChangeEventHandler<HTMLInputElement>
      | undefined = useMemo(
      () =>
        onChange
          ? (e) => {
              const currentValue = e.target.value;
              onChange(currentValue ? currentValue : null);
            }
          : undefined,
      [onChange]
    );

    return (
      <Field {...restProps} isFilled={Boolean(value)} ref={ref}>
        <StyledInput
          value={value ?? ""}
          onChange={changeHandler}
          placeholder={placeholder}
          {...inputProps}
        />
      </Field>
    );
  }
);

_InputField.displayName = "InputField";

export const InputField = memo(_InputField);
