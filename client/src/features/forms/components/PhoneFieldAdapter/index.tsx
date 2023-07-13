import { FieldAdapterFCComponent } from "@features/forms/types";
import { PhoneField, PhoneFieldProps } from "@packages/uiKit/fields";
import { memo } from "react";
import { Controller } from "react-hook-form";

const _PhoneFieldAdapter: FieldAdapterFCComponent<PhoneFieldProps> = (
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
        return <PhoneField error={error?.message} {...inputProps} {...field} />;
      }}
    />
  );
};

export const PhoneFieldAdapter = memo(
  _PhoneFieldAdapter
) as typeof _PhoneFieldAdapter;
