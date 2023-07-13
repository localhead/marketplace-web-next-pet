import { Item } from './Item';
import { StyledRadioGroup } from './styles';

import { RadioGroupOption } from './types';

import React, { memo } from 'react';

export interface RadioGroupProps<TValue extends string | number> {
  className?: string;
  style?: React.CSSProperties;
  value?: TValue | null;
  onChange?: (value: TValue) => void;
  options: RadioGroupOption<TValue>[];
  cols?: number;
}

const _RadioGroup = <TValue extends string | number = string | number>(
  props: RadioGroupProps<TValue>,
) => {
  const { value, onChange, options, cols = 1, ...restProps } = props;

  return (
    <StyledRadioGroup $cols={cols} {...restProps}>
      {options.map((opt) => {
        const active = value ? value === opt.value : false;
        const activeHandler = () => {
          onChange?.(opt.value);
        };
        return (
          <Item
            key={opt.value}
            active={active}
            label={opt.label}
            onActive={activeHandler}
          />
        );
      })}
    </StyledRadioGroup>
  );
};

export const RadioGroup = memo(_RadioGroup) as typeof _RadioGroup;
