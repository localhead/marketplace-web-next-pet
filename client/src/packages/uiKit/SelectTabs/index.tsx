import { Item } from './Item';
import { StyledSelectTabs } from './styles';

import { SelectTabsOption } from './types';

import { memo } from 'react';

export interface SelectTabsProps<ValueType extends string | number> {
  value?: ValueType | null;
  onChange?: (value: ValueType) => void;
  options: SelectTabsOption<ValueType>[];
}

const _SelectTabs = <ValueType extends string | number>(
  props: SelectTabsProps<ValueType>,
) => {
  const { value, onChange, options, ...restProps } = props;

  const createClickHandler = (value: ValueType) => {
    if (onChange) {
      return () => {
        onChange(value);
      };
    }
  };

  return (
    <StyledSelectTabs {...restProps}>
      {options.map((option) => {
        const isActive = option.value === value;

        return (
          <Item
            key={option.value}
            isActive={isActive}
            label={option.label}
            onClick={createClickHandler(option.value)}
          />
        );
      })}
    </StyledSelectTabs>
  );
};

export const SelectTabs = memo(_SelectTabs) as typeof _SelectTabs;
