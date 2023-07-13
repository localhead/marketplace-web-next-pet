import { StyledFieldError, StyledFieldLabel } from "../Field/styles";
import { StyledTextArea, StyledTextAreaContainer } from "./TextArea.styles";

import React, { useEffect, useImperativeHandle, useMemo } from "react";

export interface TextAreaProps
  extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, "onChange"> {
  onChange?: (value: string) => void;

  isResizable?: boolean;
  isAutosize?: boolean;
  error?: string;
  label?: string;
}

export const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (props, ref) => {
    const {
      value,
      onChange,
      isResizable = false,
      isAutosize,
      label,
      error = false,
      ...restProps
    } = props;

    const onChangeHandler:
      | React.ChangeEventHandler<HTMLTextAreaElement>
      | undefined = useMemo(() => {
      return onChange
        ? (event) => {
            onChange(event.target.value);
          }
        : undefined;
    }, [onChange]);

    const innerRef = React.useRef<HTMLTextAreaElement>(null);

    useImperativeHandle(ref, () => innerRef.current as HTMLTextAreaElement);

    useEffect(() => {
      if (isAutosize && innerRef.current) {
        innerRef.current.style.height = "0px";
        const scrollHeight = innerRef.current.scrollHeight;

        const newHeight = Math.max(scrollHeight + 1, 40);

        innerRef.current.style.height = newHeight + "px";
      }
    }, [props.value, isAutosize]);

    const hasError = error ? true : false;

    return (
      <StyledTextAreaContainer $hasError={hasError}>
        {label || error ? (
          error ? (
            <StyledFieldError>{error}</StyledFieldError>
          ) : (
            <StyledFieldLabel>{label}</StyledFieldLabel>
          )
        ) : null}
        <StyledTextArea
          ref={innerRef}
          value={value || ""}
          onChange={onChangeHandler}
          isResizable={isResizable}
          error={hasError}
          {...restProps}
        />
      </StyledTextAreaContainer>
    );
  }
);

TextArea.displayName = "TextArea";
