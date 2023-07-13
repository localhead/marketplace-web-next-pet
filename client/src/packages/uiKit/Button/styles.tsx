import { ButtonIconPosition, ButtonSize, ButtonVariant } from "./types";

import { colors } from "../utils/colors";

import styled, { css } from "styled-components";

const paddingDisabledVariants: ButtonVariant[] = ["text", "primary-text"];

const colorConfig: Record<
  ButtonVariant,
  {
    textColor: string;
    bgColor: string;
    borderColor: string;
    hoverTextColor: string;
    hoverBgColor: string;
    hoverBorderColor: string;
  }
> = {
  primary: {
    textColor: colors.white,
    bgColor: colors.primary,
    borderColor: colors.primary,

    hoverTextColor: colors.white,
    hoverBgColor: colors.primaryLight,
    hoverBorderColor: colors.primaryLight,
  },
  secondary: {
    textColor: colors.dark,
    bgColor: colors.backgroundColorHeader,
    borderColor: colors.backgroundColorHeader,

    hoverTextColor: colors.dark,
    hoverBgColor: colors.gray1,
    hoverBorderColor: colors.gray1,
  },
  white: {
    textColor: colors.gray11,
    bgColor: colors.white,
    borderColor: colors.white,

    hoverTextColor: colors.gray1,
    hoverBgColor: colors.white,
    hoverBorderColor: colors.white,
  },

  dark: {
    textColor: colors.white,
    bgColor: colors.dark,
    borderColor: colors.dark,
    hoverTextColor: colors.white,
    hoverBgColor: colors.dark,
    hoverBorderColor: colors.dark,
  },

  outlined: {
    textColor: colors.dark,
    bgColor: "transparent",
    borderColor: colors.primary,

    hoverTextColor: colors.dark,
    hoverBgColor: "transparent",
    hoverBorderColor: colors.dark,
  },

  "secondary-outlined": {
    textColor: colors.dark,
    bgColor: "transparent",
    borderColor: colors.gray1,

    hoverTextColor: colors.dark,
    hoverBgColor: "transparent",
    hoverBorderColor: colors.dark,
  },
  text: {
    textColor: colors.dark,
    bgColor: "transparent",
    borderColor: "transparent",

    hoverTextColor: colors.dark,
    hoverBgColor: "transparent",
    hoverBorderColor: "transparent",
  },
  "primary-text": {
    textColor: colors.primary,
    bgColor: "transparent",
    borderColor: "transparent",

    hoverTextColor: colors.primary,
    hoverBgColor: "transparent",
    hoverBorderColor: "transparent",
  },
  "select-type": {
    textColor: colors.dark,
    bgColor: colors.gray9,
    borderColor: "transparent",

    hoverTextColor: colors.dark,
    hoverBgColor: "rgb(1, 1, 1, 0.05)",
    hoverBorderColor: colors.gray9,
  },
};

const disabledConfig = {
  textColor: colors.dark1,
  bgColor: colors.gray9,
  borderColor: colors.gray9,
};

const sizeConfig: Record<
  ButtonSize,
  {
    paddingVerticalPx: number;
    paddingHorizontalPx: number;
    paddingHorizontalIcon: number;
    fontSize: number;
    iconSize: number;
    borderRadius: number;
    gap: number;
  }
> = {
  "extra-small": {
    paddingVerticalPx: 5,
    paddingHorizontalPx: 9,
    paddingHorizontalIcon: 9,
    fontSize: 12,
    borderRadius: 24,
    gap: 8,
    iconSize: 14,
  },
  small: {
    paddingVerticalPx: 6,
    paddingHorizontalPx: 15,
    paddingHorizontalIcon: 13,
    fontSize: 12,
    borderRadius: 24,
    gap: 15,
    iconSize: 16,
  },

  medium: {
    paddingVerticalPx: 12,
    paddingHorizontalPx: 20,
    paddingHorizontalIcon: 14,
    fontSize: 16,
    borderRadius: 34,
    gap: 15,
    iconSize: 16,
  },
  preMedium: {
    paddingVerticalPx: 10,
    paddingHorizontalPx: 15,
    paddingHorizontalIcon: 14,
    fontSize: 14,
    borderRadius: 34,
    gap: 15,
    iconSize: 16,
  },
  large: {
    paddingVerticalPx: 14,
    paddingHorizontalPx: 29,
    paddingHorizontalIcon: 13,
    fontSize: 16,
    borderRadius: 24,
    gap: 19,
    iconSize: 20,
  },
  extralarge: {
    paddingVerticalPx: 19.5,
    paddingHorizontalPx: 37,
    paddingHorizontalIcon: 13,
    borderRadius: 34,
    fontSize: 18,
    gap: 19,
    iconSize: 20,
  },
};

export const StyledIconContainer = styled.div`
  display: flex;
`;

export type StyledButtonProps = {
  $size: ButtonSize;
  $variant: ButtonVariant;
  $block: boolean;
  $hasIcon: boolean;
  disabled?: boolean;
  $iconPosition: ButtonIconPosition;
};

export const StyledContent = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledButton = styled.button<StyledButtonProps>`
  border-radius: 18px;
  border-style: solid;
  border-width: 1px;
  line-height: 120%;

  display: block;

  min-width: fit-content;

  transition: 0.1s ease;
  transition-property: background-color, border-color;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  ${(props) => {
    if (props.disabled) {
      const { bgColor, borderColor, textColor } = disabledConfig;

      return css`
        background-color: ${bgColor};
        color: ${textColor};
        border-color: ${borderColor};
      `;
    }

    const {
      textColor,
      bgColor,
      borderColor,
      hoverTextColor,
      hoverBgColor,
      hoverBorderColor,
    } = colorConfig[props.$variant];

    return css`
      cursor: pointer;
      background-color: ${bgColor};
      color: ${textColor};
      border-color: ${borderColor};

      :hover {
        background-color: ${hoverBgColor};
        color: ${hoverTextColor};
        border-color: ${hoverBorderColor};
      }
    `;
  }}

  ${({ $size, $hasIcon, $iconPosition, $variant }) => {
    const {
      fontSize,
      iconSize,
      paddingHorizontalPx,
      paddingVerticalPx,
      paddingHorizontalIcon,
      borderRadius,
      gap,
    } = sizeConfig[$size];

    const isPaddingDisabled = paddingDisabledVariants.includes($variant);

    const paddingLeft = !isPaddingDisabled
      ? $hasIcon && $iconPosition === "left"
        ? paddingHorizontalIcon
        : paddingHorizontalPx
      : 0;
    const paddingRight = !isPaddingDisabled
      ? $hasIcon && $iconPosition === "right"
        ? paddingHorizontalIcon
        : paddingHorizontalPx
      : 0;

    const verticalRealPadding = !isPaddingDisabled ? paddingVerticalPx : 0;

    return css`
      font-size: ${fontSize}px;
      padding: ${verticalRealPadding}px ${paddingRight}px
        ${verticalRealPadding}px ${paddingLeft}px;
      border-radius: ${borderRadius}px;

      ${$hasIcon &&
      css`
        ${StyledIconContainer} {
          font-size: ${iconSize}px;
        }

        gap: ${gap}px;
        justify-content: space-between;
      `}
    `;
  }}



  align-items: center;
  justify-content: center;

  ${({ $block }) =>
    $block
      ? css`
          display: flex;
          width: 100%;
        `
      : css`
          display: inline-flex;
        `};

  ${({ $variant }) =>
    $variant === "select-type" &&
    css`
      padding: 9px 22px 9px 18px;
      justify-content: space-between;
    `};
`;
