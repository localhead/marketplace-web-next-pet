import { StyledCheckboxGroup } from './styles';
import { CheckboxGroupOption } from './types';

import { Checkbox } from '../Checkbox';

import React, { memo } from 'react';

export interface CheckboxGroupProps<TValue extends string | number> {
  className?: string;
  style?: React.CSSProperties;
  value?: TValue[] | null;
  onChange?: (value: TValue[]) => void;
  options: CheckboxGroupOption<TValue>[];
  cols?: number;
}

const _CheckboxGroup = <TValue extends string | number = string | number>(
  props: CheckboxGroupProps<TValue>,
) => {
  const { value, onChange, options, cols = 1, ...restProps } = props;

  return (
    <StyledCheckboxGroup $cols={cols} {...restProps}>
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
          <Checkbox
            key={opt.value}
            value={active}
            label={opt.label}
            onChange={toggleHandler}
          />
        );
      })}
    </StyledCheckboxGroup>
  );
};

export const CheckboxGroup = memo(_CheckboxGroup) as typeof _CheckboxGroup;
