import {
  StyledItem as StyledCheckbox,
  StyledCircle,
  StyledLabel,
} from "./styles";

import { CheckIcon } from "@packages/icons";
import { forwardRef, memo, ReactNode } from "react";

export interface CheckboxProps {
  label: ReactNode;
  value: boolean;
  onChange?: (value: boolean) => void;
  error?: boolean;
}

const _Checkbox = forwardRef<HTMLDivElement, CheckboxProps>((props, ref) => {
  const { value, label, onChange, error, ...restProps } = props;

  const clickHandler = () => {
    onChange?.(!value);
  };

  return (
    <StyledCheckbox
      {...restProps}
      onClick={clickHandler}
      $isActive={value}
      ref={ref}
    >
      <StyledCircle $isActive={value} $isError={error}>
        {value && <CheckIcon size={14} />}
      </StyledCircle>
      <StyledLabel>{label}</StyledLabel>
    </StyledCheckbox>
  );
});

_Checkbox.displayName = "Checkbox";

export const Checkbox = memo(_Checkbox);
