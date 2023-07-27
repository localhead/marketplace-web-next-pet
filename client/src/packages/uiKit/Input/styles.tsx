import { InputSize, InputVariant } from "./types";

import { colors } from "../utils";

import styled, { css, FlattenSimpleInterpolation } from "styled-components";

export const StyledInput = styled.input`
  flex: 1;
  display: block;
  min-width: 0;

  border: none;
  line-height: 120%;
  background: transparent;
  padding: 0;

  :focus,
  :focus-visible :active {
    outline: none;
  }
`;

const variantStylesMap: Record<InputVariant, FlattenSimpleInterpolation> = {
  outlined: css`
    border: 1px solid ${colors.gray5};
    background-color: ${colors.white};

    transition: 0.3s ease;

    ${StyledInput} {
      ::placeholder {
        color: ${colors.gray3};
      }
    }

    :focus,
    :focus-within {
      border-color: ${colors.gray1};
    }
  `,
  filled: css`
    border: 1px solid ${colors.gray5};
    background-color: ${colors.gray2};

    :focus,
    :focus-within {
      outline: none;
      border-color: ${colors.gray1};
    }
  `,
};

const sizeStylesMap: Record<InputSize, FlattenSimpleInterpolation> = {
  small: css`
    padding: 5px 8px 5px 0px;
    border-radius: 10px;
    min-height: 30px;

    ${StyledInput} {
      margin: 0 10px;
      font-size: 14px;
    }
  `,
  medium: css`
    padding: 12px 12px;
    border-radius: 10px;

    ${StyledInput} {
      margin: 0 16px;
      font-size: 14px;
    }
  `,
};

export const StyledInputContainer = styled.div<{
  $variant: InputVariant;
  $size: InputSize;
}>`
  display: flex;
  min-width: 0;
  width: 100%;

  ${({ $variant }) => variantStylesMap[$variant]}
  ${({ $size }) => sizeStylesMap[$size]}
`;

export const StyledRightContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledLeftContainer = styled.div`
  display: flex;
  align-items: center;
`;
