import { FieldAdapterFCComponent } from "@features/forms/types";
import { InputField, InputFieldProps } from "@packages/uiKit/fields/InputField";
import { memo } from "react";
import { Controller } from "react-hook-form";

const _InputFieldAdapter: FieldAdapterFCComponent<InputFieldProps> = (
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
      render={({ field, fieldState: { error } }) => {
        return <InputField error={error?.message} {...inputProps} {...field} />;
      }}
    />
  );
};

export const InputFieldAdapter = memo(
  _InputFieldAdapter
) as typeof _InputFieldAdapter;
