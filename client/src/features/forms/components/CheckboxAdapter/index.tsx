import { FieldAdapterFCComponent } from "@features/forms/types";
import { Checkbox, CheckboxProps } from "@packages/uiKit";
import { memo } from "react";
import { Controller } from "react-hook-form";

const _CheckboxAdapter: FieldAdapterFCComponent<CheckboxProps> = (props) => {
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
        return <Checkbox {...inputProps} error={Boolean(error)} {...field} />;
      }}
    />
  );
};

export const CheckboxAdapter = memo(
  _CheckboxAdapter
) as typeof _CheckboxAdapter;
