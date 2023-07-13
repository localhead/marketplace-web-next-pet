import { ExpandableGroup } from "@components/ExpandableGroup";
import { CheckboxGroup, CheckboxGroupProps } from "@packages/uiKit";
import { memo } from "react";

export type ExpandableCheckboxGroupProps<TValue extends string | number> =
  CheckboxGroupProps<TValue> & {
    maxLength: number;
  };

const _ExpandableCheckboxGroup = <TValue extends string | number>(
  props: ExpandableCheckboxGroupProps<TValue>
) => {
  const { options, maxLength, ...restProps } = props;

  return (
    <ExpandableGroup
      options={options}
      maxLength={maxLength}
      render={(visibleOptions) => {
        return <CheckboxGroup options={visibleOptions} {...restProps} />;
      }}
    />
  );
};

export const ExpandableCheckboxGroup = memo(
  _ExpandableCheckboxGroup
) as typeof _ExpandableCheckboxGroup;
