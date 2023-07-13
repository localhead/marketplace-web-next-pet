import { FieldAdapterFCComponent } from "@features/forms/types";
import { PasswordField, PasswordFieldProps } from "@packages/uiKit/fields";
import { memo } from "react";
import { Controller } from "react-hook-form";

const _PasswordFieldAdapter: FieldAdapterFCComponent<PasswordFieldProps> = (
  props
) => {
  const {
    control,
    name,
    defaultValue,
    rules,
    shouldUnregister,
    ...inputProps
  } = props;

  return (
    <Controller
      control={control}
      name={name}
      defaultValue={defaultValue}
      rules={rules}
      shouldUnregister={shouldUnregister}
      render={({
        field: { onBlur, onChange, value },
        fieldState: { error },
      }) => {
        return (
          <PasswordField
            error={error?.message}
            value={value}
            onChange={onChange}
            {...inputProps}
            inputProps={{ onBlur, ...inputProps.inputProps }}
          />
        );
      }}
    />
  );
};

export const PasswordFieldAdapter = memo(
  _PasswordFieldAdapter
) as typeof _PasswordFieldAdapter;
