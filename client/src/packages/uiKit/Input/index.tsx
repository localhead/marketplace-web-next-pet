import {
  StyledInput,
  StyledInputContainer,
  StyledLeftContainer,
  StyledRightContainer,
} from "./styles";

import { InputSize, InputVariant } from "./types";

import React, { ReactNode, useMemo } from "react";

export interface InputProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    "onChange" | "size"
  > {
  onChange?: (value: string, e: React.ChangeEvent<HTMLInputElement>) => void;
  left?: ReactNode;
  right?: ReactNode;
  variant?: InputVariant;
  size?: InputSize;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (props, ref) => {
    const {
      onChange,
      left,
      right,
      variant = "outlined",
      size = "medium",
      className,
      style,
      ...restProps
    } = props;

    const onChangeHandler:
      | React.ChangeEventHandler<HTMLInputElement>
      | undefined = useMemo(() => {
      return onChange
        ? (event) => {
            onChange(event.target.value, event);
          }
        : undefined;
    }, [onChange]);

    return (
      <StyledInputContainer
        $variant={variant}
        $size={size}
        className={className}
        style={style}
      >
        {left && <StyledLeftContainer>{left}</StyledLeftContainer>}
        <StyledInput ref={ref} onChange={onChangeHandler} {...restProps} />
        {right && <StyledRightContainer>{right}</StyledRightContainer>}
      </StyledInputContainer>
    );
  }
);

Input.displayName = "Input";
