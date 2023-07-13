import { StyledTabItem, StyledTabs } from "./styles";

import { TabsSize, TabsTabItem, TabsVariant } from "./types";

import React from "react";

export interface TabsProps<
  ValueType extends string | number = string | number
> {
  className?: string;
  style?: React.CSSProperties;
  tabs: TabsTabItem<ValueType>[];
  value?: ValueType | null;
  onChange?: (value: ValueType) => void;
  variant?: TabsVariant;
  scroll?: boolean;
  size?: TabsSize;
}

export const Tabs = <ValueType extends string | number = string | number>(
  props: TabsProps<ValueType>
) => {
  const {
    tabs,
    scroll = false,
    size = "default",
    value,
    onChange,
    variant = "round",
    ...restProps
  } = props;

  return (
    <>
      <StyledTabs variant={variant} scroll={scroll} {...restProps}>
        {tabs.map((tab) => {
          const isSelected = Boolean(value) && value === tab.value;
          const onClickHandler =
            !isSelected && onChange
              ? () => {
                  onChange(tab.value);
                }
              : undefined;

          return (
            <StyledTabItem
              key={tab.value}
              onClick={onClickHandler}
              isSelected={isSelected}
              variant={variant}
              $size={size}
            >
              {tab.label}
            </StyledTabItem>
          );
        })}
      </StyledTabs>
    </>
  );
};
