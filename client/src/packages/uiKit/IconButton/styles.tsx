import { IconButtonSize, IconButtonVariant } from "./types";

import { colors } from "../utils";

import styled, { css, FlattenSimpleInterpolation } from "styled-components";

const sizeStylesMap: Record<IconButtonSize, FlattenSimpleInterpolation> = {
  zero: css`
    padding: 0;
  `,

  small: css`
    padding: 5px;
  `,
  default: css`
    padding: 8px;
  `,
  large: css`
    padding: 13px;
  `,
  extraLarge: css`
    padding: 17px;
  `,
};

const variantStylesMap: Record<IconButtonVariant, FlattenSimpleInterpolation> =
  {
    text: css`
      color: ${colors.dark};

      :hover {
        color: ${colors.dark};
      }
    `,

    "primary-text": css`
      color: ${colors.primary};

      :hover {
        color: ${colors.primaryLight};
      }
    `,

    "secondary-text": css`
      color: ${colors.gray4};

      :hover {
        color: ${colors.gray3};
      }
    `,

    secondary: css`
      background-color: transparent;
      color: ${colors.dark};
      border: 1px solid transparent;
      :hover {
        background-color: ${colors.gray2};
      }
    `,

    primary: css`
      background-color: ${colors.primary};
      color: ${colors.white};
      :hover {
        background-color: ${colors.primaryLight};
      }
    `,

    "outlined-circle": css`
      background-color: transparent;
      border: 1px solid ${colors.gray5};
      color: ${colors.dark};

      :hover {
        background-color: rgba(0, 0, 0, 0.05);
      }
    `,
    "white-outlined-circle": css`
      background-color: transparent;
      border: 1px solid ${colors.gray5};
      color: ${colors.white};

      :hover {
        background-color: rgba(0, 0, 0, 0.05);
      }
    `,
    "primary-outlined-circle": css`
      background-color: transparent;
      border: 1px solid ${colors.gray5};
      color: ${colors.primary};

      :hover {
        background-color: rgba(0, 0, 0, 0.05);
      }
    `,
    "white-background": css`
      background-color: ${colors.white};
      border: 1px solid ${colors.white};
      color: ${colors.blue};

      :hover {
        background-color: ${colors.gray5};
        border: 1px solid ${colors.gray5};
      }
    `,
  };

export type StyledIconButtonProps = {
  $variant: IconButtonVariant;
  $size: IconButtonSize;
  $rounded: boolean;
};

export const StyledIconButton = styled.button<StyledIconButtonProps>`
  width: fit-content;
  height: fit-content;
  background-color: transparent;
  border-radius: 100%;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.1s ease;
  padding: 0;
  ${({ $variant }) => variantStylesMap[$variant]}
  ${({ $size }) => sizeStylesMap[$size]}

  ${({ $rounded }) =>
    !$rounded &&
    css`
      border-radius: 10px;
    `}

  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.8;
      cursor: not-allowed;
    `}
`;
