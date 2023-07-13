export type TabsTabItem<ValueType extends string | number = string> = {
  value: ValueType;
  label: string;
};

export type TabsVariant = "round";

export type TabsSize = "small" | "default";
