import { FieldAdapterFCComponent } from "@features/forms/types";
import {
  InputNumberField,
  InputNumberFieldProps,
} from "@packages/uiKit/fields/InputNumberField";
import { memo } from "react";
import { Controller } from "react-hook-form";

const _InputNumberFieldAdapter: FieldAdapterFCComponent<
  InputNumberFieldProps
> = (props) => {
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
        return (
          <InputNumberField error={error?.message} {...inputProps} {...field} />
        );
      }}
    />
  );
};

export const InputNumberFieldAdapter = memo(
  _InputNumberFieldAdapter
) as typeof _InputNumberFieldAdapter;
