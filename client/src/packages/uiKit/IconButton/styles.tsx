import { IconButtonVariant } from "./types";

import { colors } from "../utils";

import styled, { css, FlattenSimpleInterpolation } from "styled-components";

const variantStylesMap: Record<IconButtonVariant, FlattenSimpleInterpolation> =
  {
    text: css`
      color: ${colors.dark};

      :hover {
        color: ${colors.dark};
      }
    `,

    "secondary-text": css`
      color: ${colors.gray4};

      :hover {
        color: ${colors.gray3};
      }
    `,

    secondary: css`
      padding: 10px;
      border-radius: 14px;
      background-color: ${colors.gray9};
      color: ${colors.dark};
      :hover {
        background-color: ${colors.gray8};
      }
    `,

    primary: css`
      padding: 10px;
      border-radius: 14px;
      background-color: ${colors.primary};
      color: ${colors.dark};
      :hover {
        background-color: ${colors.primaryLight};
      }
    `,

    "secondary-outlined": css`
      padding: 10px;
      border-radius: 14px;
      background-color: "transparent";
      border: 1px solid ${colors.gray5};
      color: ${colors.dark};

      :hover {
        border: 1px solid ${colors.dark};
      }
    `,
  };

export type StyledIconButtonProps = {
  $variant: IconButtonVariant;
};

export const StyledIconButton = styled.button<StyledIconButtonProps>`
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.1s ease;
  padding: 0;
  ${({ $variant }) => variantStylesMap[$variant]}

  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.8;
      cursor: not-allowed;
    `}
`;
