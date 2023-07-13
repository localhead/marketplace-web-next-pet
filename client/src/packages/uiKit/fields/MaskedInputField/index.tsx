import { StyledInput } from "./styles";

import { Field, FieldProps } from "@packages/uiKit/Field";
import React, { forwardRef, memo, useMemo } from "react";
import { Props as InputMaskProps } from "react-input-mask";

export interface MaskedInputFieldProps extends Omit<FieldProps, "children"> {
  value?: string | null;
  onChange?: (value: string | null) => void;
  inputProps: InputMaskProps;

  error?: string;
}

const _MaskedInputField = forwardRef<HTMLDivElement, MaskedInputFieldProps>(
  (props, ref) => {
    const { value, onChange, inputProps, ...restProps } = props;

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
          {...inputProps}
        />
      </Field>
    );
  }
);

_MaskedInputField.displayName = "MaskedInputField";

export const MaskedInputField = memo(_MaskedInputField);
