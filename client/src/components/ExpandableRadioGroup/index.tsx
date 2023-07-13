import { ExpandableGroup } from '@components/ExpandableGroup';
import { RadioGroup, RadioGroupProps } from '@packages/uiKit';
import { memo } from 'react';

export interface ExpandableRadioGroupProps<TValue extends string | number>
  extends RadioGroupProps<TValue> {
  maxLength: number;
}

const _ExpandableRadioGroup = <TValue extends string | number>(
  props: ExpandableRadioGroupProps<TValue>,
) => {
  const { options, maxLength, ...restProps } = props;

  return (
    <ExpandableGroup
      options={options}
      maxLength={maxLength}
      render={(visibleOptions) => {
        return <RadioGroup options={visibleOptions} {...restProps} />;
      }}
    />
  );
};

export const ExpandableRadioGroup = memo(
  _ExpandableRadioGroup,
) as typeof _ExpandableRadioGroup;
