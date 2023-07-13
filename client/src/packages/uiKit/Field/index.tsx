import {
  StyledControlContainter,
  StyledError,
  StyledField,
  StyledLabel,
  StyledLeftContainer,
  StyledMiddleContainer,
  StyledRightContainer,
} from "./styles";
import { FieldSize, FieldVariant } from "./types";

import React, { forwardRef, PropsWithChildren, ReactNode } from "react";

export interface FieldProps extends PropsWithChildren {
  className?: string;
  style?: React.CSSProperties;
  size?: FieldSize;
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
    size,
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
    <StyledField ref={ref} $hasError={Boolean(error)} {...restProps}>
      {left ? <StyledLeftContainer>{left}</StyledLeftContainer> : null}

      <StyledMiddleContainer>
        {label || error ? (
          error ? (
            <StyledError>{error}</StyledError>
          ) : (
            <StyledLabel $isFilled={isFilled}>{label}</StyledLabel>
          )
        ) : null}

        {children ? (
          <StyledControlContainter>{children}</StyledControlContainter>
        ) : null}
      </StyledMiddleContainer>

      {right ? <StyledRightContainer>{right}</StyledRightContainer> : null}
    </StyledField>
  );
});

Field.displayName = "Field";
