import { Field, FieldProps } from "@packages/uiKit/Field";
import { Select } from "@packages/uiKit/Select";
import { SelectOption } from "@packages/uiKit/Select/types";
import { forwardRef, memo } from "react";

export interface SelectFieldProps extends Omit<FieldProps, "children"> {
  value?: string | number | null;
  onChange?: (value: string | number | null) => void;

  options: SelectOption[];
  placeholder?: string;
}

const _SelectField = forwardRef<HTMLDivElement, SelectFieldProps>(
  (props, ref) => {
    const { value, onChange, options, label, placeholder, ...restProps } =
      props;

    return (
      <Field {...restProps} isFilled={Boolean(value)} label={label} ref={ref}>
        <Select
          options={options}
          variant={"outlined"}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
      </Field>
    );
  }
);

_SelectField.displayName = "SelectField";

export const SelectField = memo(_SelectField);
