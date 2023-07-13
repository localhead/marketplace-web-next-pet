import { FieldAdapterFCComponent } from "@features/forms/types";
import {
  SelectField,
  SelectFieldProps,
} from "@packages/uiKit/fields/SelectField";
import { memo } from "react";
import { Controller } from "react-hook-form";

const _SelectFieldAdapter: FieldAdapterFCComponent<SelectFieldProps> = (
  props
) => {
  const { control, name, ...inputProps } = props;

  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => {
        return (
          <SelectField error={error?.message} {...field} {...inputProps} />
        );
      }}
    />
  );
};

export const SelectFieldAdapter = memo(
  _SelectFieldAdapter
) as typeof _SelectFieldAdapter;
