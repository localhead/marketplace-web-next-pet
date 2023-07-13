import { FieldAdapterFCComponent } from "@features/forms/types";
import { RangeField, RangeFieldProps } from "@packages/uiKit/fields/RangeField";
import { memo } from "react";
import { Controller } from "react-hook-form";

const _RangeFieldAdapter: FieldAdapterFCComponent<RangeFieldProps> = (
  props
) => {
  const { control, name, ...inputProps } = props;

  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => {
        return <RangeField error={error?.message} {...field} {...inputProps} />;
      }}
    />
  );
};

export const RangeFieldAdapter = memo(
  _RangeFieldAdapter
) as typeof _RangeFieldAdapter;
