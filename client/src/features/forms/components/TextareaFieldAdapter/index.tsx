import { FieldAdapterFCComponent } from "@features/forms/types";
import { TextArea, TextAreaProps } from "@packages/uiKit/TextArea";
import { memo } from "react";
import { Controller } from "react-hook-form";

const _TextAreaFieldAdapter: FieldAdapterFCComponent<TextAreaProps> = (
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
        return <TextArea error={error?.message} {...inputProps} {...field} />;
      }}
    />
  );
};

export const TextAreaFieldAdapter = memo(
  _TextAreaFieldAdapter
) as typeof _TextAreaFieldAdapter;
