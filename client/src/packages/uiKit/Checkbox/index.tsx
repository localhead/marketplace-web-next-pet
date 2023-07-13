import {
  StyledCircle,
  StyledItem as StyledCheckbox,
  StyledLabel,
} from "./styles";

import { CheckIcon } from "@packages/icons";
import { FC, memo, ReactNode } from "react";

export interface CheckboxProps {
  label: ReactNode;
  value: boolean;
  onChange?: (value: boolean) => void;
  error?: boolean;
}

const _Checkbox: FC<CheckboxProps> = (props) => {
  const { value, label, onChange, error, ...restProps } = props;

  const clickHandler = () => {
    onChange?.(!value);
  };

  return (
    <StyledCheckbox {...restProps} onClick={clickHandler} $isActive={value}>
      <StyledCircle $isActive={value} $isError={error}>
        {value && <CheckIcon size={14} />}
      </StyledCircle>
      <StyledLabel>{label}</StyledLabel>
    </StyledCheckbox>
  );
};

export const Checkbox = memo(_Checkbox);
