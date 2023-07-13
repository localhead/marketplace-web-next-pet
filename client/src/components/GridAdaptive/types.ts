export type GridBorder = "none" | "both" | "bottom" | "between";

export type GridAdaptiveParam<T> =
  | T
  | { default: T; desktop?: T; tablet?: T; mobile?: T };
