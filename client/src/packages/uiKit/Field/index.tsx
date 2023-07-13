import {
  StyledControlContainer,
  StyledField,
  StyledFieldError,
  StyledFieldLabel,
  StyledLeftContainer,
  StyledMiddleContainer,
  StyledRightContainer,
} from "./styles";
import { FieldVariant } from "./types";

import React, { forwardRef, PropsWithChildren, ReactNode } from "react";

export interface FieldProps extends PropsWithChildren {
  className?: string;
  style?: React.CSSProperties;
  size?: "large" | "medium";
  variant?: FieldVariant;
  label?: string;
  left?: ReactNode;
  right?: ReactNode;
  isFilled?: boolean;
  error?: string;
  onClick?: () => void;
}

export const Field = forwardRef<HTMLDivElement, FieldProps>((props, ref) => {
  const {
    size = "large",
    variant,
    label,
    left,
    right,
    children,
    isFilled,
    error,
    ...restProps
  } = props;

  return (
    <StyledField
      ref={ref}
      $hasError={Boolean(error)}
      $variant={variant}
      {...restProps}
    >
      {left ? <StyledLeftContainer>{left}</StyledLeftContainer> : null}

      <StyledMiddleContainer $size={size}>
        {label || error ? (
          error ? (
            <StyledFieldError>{error}</StyledFieldError>
          ) : (
            <StyledFieldLabel $isFilled={isFilled}>{label}</StyledFieldLabel>
          )
        ) : null}

        {children ? (
          <StyledControlContainer>{children}</StyledControlContainer>
        ) : null}
      </StyledMiddleContainer>

      {right ? <StyledRightContainer>{right}</StyledRightContainer> : null}
    </StyledField>
  );
});

Field.displayName = "Field";
