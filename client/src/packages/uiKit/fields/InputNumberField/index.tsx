import { StyledInput } from "./styles";

import { Field, FieldProps } from "@packages/uiKit/Field";
import { forwardRef, InputHTMLAttributes, memo } from "react";

export interface InputNumberFieldProps extends Omit<FieldProps, "children"> {
  value?: number | null;
  onChange?: (value: number | null) => void;
  placeholder?: string;
  inputProps?: Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "value" | "onChange" | "size"
  >;
}

const _InputNumberField = forwardRef<HTMLDivElement, InputNumberFieldProps>(
  (props, ref) => {
    const { value, onChange, placeholder, inputProps, ...restProps } = props;

    return (
      <Field {...restProps} isFilled={Boolean(value)} ref={ref}>
        <StyledInput
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          {...inputProps}
        />
      </Field>
    );
  }
);

_InputNumberField.displayName = "InputNumberField";

export const InputNumberField = memo(_InputNumberField);
