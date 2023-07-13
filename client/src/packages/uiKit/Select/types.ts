import React from "react";

export type SelectValue = number | string;
export interface SelectOption<ValueType extends SelectValue = string | number> {
  value: ValueType;
  label: React.ReactNode;
  icon?: React.ReactNode;
}

export type SelectVariant = "filled" | "outlined";
export type SelectSize = "medium" | "small" | "noCaret";
