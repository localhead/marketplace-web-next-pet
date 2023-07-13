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
    border: 1px solid ${colors.gray1};
    background-color: ${colors.white};

    ${StyledInput} {
      ::placeholder {
        color: ${colors.gray3};
      }
    }

    :focus,
    :focus-within {
      border-color: ${colors.gray3};
    }
  `,
  filled: css`
    background-color: ${colors.gray7};

    :focus,
    :focus-within {
      outline: none;
      border-color: ${colors.gray5};
    }
  `,
};

const sizeStylesMap: Record<InputSize, FlattenSimpleInterpolation> = {
  small: css`
    padding: 5px 5px 5px 15px;
    border-radius: 30px;
    min-height: 30px;

    ${StyledInput} {
      margin: 0 10px;
      font-size: 18px;
    }
  `,
  medium: css`
    padding: 12px 12px;
    border-radius: 30px;

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
