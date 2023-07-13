import { Item } from './Item';
import { StyledCheckboxGroupField } from './styles';
import { CheckboxGroupFieldOption } from './types';

import React, { memo } from 'react';

export interface CheckboxGroupFieldProps<TValue extends string | number> {
  className?: string;
  style?: React.CSSProperties;
  value?: TValue[] | null;
  onChange?: (value: TValue[]) => void;
  options: CheckboxGroupFieldOption<TValue>[];
}

const _CheckboxGroupField = <TValue extends string | number = string | number>(
  props: CheckboxGroupFieldProps<TValue>,
) => {
  const { value, onChange, options, ...restProps } = props;

  return (
    <StyledCheckboxGroupField {...restProps}>
      {options.map((opt) => {
        const active = value ? value.includes(opt.value) : false;
        const toggleHandler = active
          ? () => {
              onChange?.(value?.filter((val) => val !== opt.value) ?? []);
            }
          : () => {
              onChange?.([...(value ?? []), opt.value]);
            };
        return (
          <Item
            key={opt.value}
            isActive={active}
            label={opt.label}
            onToggle={toggleHandler}
          />
        );
      })}
    </StyledCheckboxGroupField>
  );
};

export const CheckboxGroupField = memo(
  _CheckboxGroupField,
) as typeof _CheckboxGroupField;
