import { ButtonIconPosition, ButtonSize, ButtonVariant } from "./types";

import { colors } from "../utils/colors";

import styled, { css } from "styled-components";

const sizeStyleDisableVariants: ButtonVariant[] = ["text"];

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
    textColor: colors.dark,
    bgColor: colors.primary,
    borderColor: colors.primary,

    hoverTextColor: colors.dark,
    hoverBgColor: colors.primaryLight,
    hoverBorderColor: colors.primaryLight,
  },
  secondary: {
    textColor: colors.gray2,
    bgColor: colors.gray9,
    borderColor: colors.gray9,

    hoverTextColor: colors.dark,
    hoverBgColor: colors.gray8,
    hoverBorderColor: colors.gray8,
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
    borderColor: colors.gray5,

    hoverTextColor: colors.dark,
    hoverBgColor: "transparent",
    hoverBorderColor: colors.dark,
  },

  "secondary-outlined": {
    textColor: colors.dark,
    bgColor: "transparent",
    borderColor: colors.gray5,

    hoverTextColor: colors.dark,
    hoverBgColor: "transparent",
    hoverBorderColor: colors.dark,
  },
  text: {
    textColor: colors.gray11,
    bgColor: "transparent",
    borderColor: "transparent",

    hoverTextColor: colors.gray2,
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
    fontSize: 11,
    borderRadius: 11,
    gap: 8,
    iconSize: 12,
  },
  small: {
    paddingVerticalPx: 8.5,
    paddingHorizontalPx: 17,
    paddingHorizontalIcon: 10,
    fontSize: 12,
    borderRadius: 12,
    gap: 15,
    iconSize: 16,
  },

  medium: {
    paddingVerticalPx: 11,
    paddingHorizontalPx: 12,
    paddingHorizontalIcon: 10,
    fontSize: 12,
    borderRadius: 14,
    gap: 15,
    iconSize: 16,
  },
  large: {
    paddingVerticalPx: 15,
    paddingHorizontalPx: 22,
    paddingHorizontalIcon: 13,
    fontSize: 14,
    borderRadius: 18,
    gap: 19,
    iconSize: 20,
  },
  extralarge: {
    paddingVerticalPx: 17.5,
    paddingHorizontalPx: 35,
    paddingHorizontalIcon: 13,
    borderRadius: 18,
    fontSize: 16,
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

    const sizeStyleDisabled = sizeStyleDisableVariants.includes($variant);

    const paddingLeft = !sizeStyleDisabled
      ? $hasIcon && $iconPosition === "left"
        ? paddingHorizontalIcon
        : paddingHorizontalPx
      : 0;
    const paddingRight = !sizeStyleDisabled
      ? $hasIcon && $iconPosition === "right"
        ? paddingHorizontalIcon
        : paddingHorizontalPx
      : 0;

    const verticalRealPadding = !sizeStyleDisabled ? paddingVerticalPx : 0;

    const realBorderRadius = !sizeStyleDisabled ? borderRadius : 0;

    //TODO Периписать Button, а то уже выглядит как шиза

    return css`
      font-size: ${fontSize}px;
      padding: ${verticalRealPadding}px ${paddingRight}px
        ${verticalRealPadding}px ${paddingLeft}px;
      border-radius: ${realBorderRadius}px;

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
