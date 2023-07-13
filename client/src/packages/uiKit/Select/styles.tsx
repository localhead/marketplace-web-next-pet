import { SelectSize, SelectVariant } from "./types";

import { colors } from "../utils/colors";
import { placeholderStyles } from "../utils/placeholderStyles";
import { zIndexes } from "../utils/zIndexes";

import { media } from "@features/adaptive/breakpoints";
import { CaretDownIcon, CloseIcon } from "@packages/icons";
import styled, { FlattenSimpleInterpolation, css } from "styled-components";
import { Typography } from "../Typography";

export const StyledSelectContainer = styled.div<{
  $variant: SelectVariant;
  $size: SelectSize;
}>`
  position: relative;

  border-radius: 14px;

  ${({ $variant, $size }) => css`
    ${sizeToStyles[$size]}

    ${variantToStyles[$variant]}
  `}
`;

export const StyledButton = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 11px;

  cursor: pointer;
`;

export const StyledLeftContainer = styled.div``;

export const StyledCloseIcon = styled(CloseIcon)`
  font-size: 14px;
`;

export const StyledCaretDownIcon = styled(CaretDownIcon)<{
  $isVisible: boolean;
}>`
  ${({ $isVisible }) =>
    $isVisible
      ? css`
          transition: 0.3s ease;
          transform: rotate(180deg);
        `
      : css`
          transition: 0.3s ease;
          transform: rotate(0deg);
        `}
`;

export const StyledLabel = styled.div`
  flex: 1;
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const StyledPlaceholder = styled(Typography).attrs({
  size: 18,
  weight: 400,
  color: "dark",
})`
  ${placeholderStyles}
  flex: 1;
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  ${media.down("desktop")} {
    font-size: 14px;
  }
`;

export const StyledDropdown = styled.div<{
  $isVisible: boolean;
}>`
  z-index: ${zIndexes.dropdown};
  position: absolute;
  box-shadow: 0px 12px 24px rgba(0, 0, 0, 0.09);
  left: 0;
  min-width: 100%;
  display: flex;
  flex-direction: column;
  overflow: auto;
  transition: max-height 0.3s ease;
  max-height: 300px;

  ${({ $isVisible }) =>
    $isVisible
      ? css`
          animation: showScroll 0.5s;
          @keyframes showScroll {
            0% {
              overflow-y: hidden;
            }
            ,
            99% {
              overflow-y: hidden;
            }
            100% {
              overflow: auto;
            }
          }
        `
      : css`
          visibility: hidden;
          max-height: 0;
        `};
`;

export const StyledIconContainer = styled.div`
  color: ${colors.gray3};
  font-size: 17px;
  display: flex;
`;

export const StyledLabelContainer = styled.div``;

export const DropdownItem = styled.div<{
  $isSelected: boolean;
}>`
  cursor: pointer;
  white-space: nowrap;
  display: flex;
  gap: 12px;
  align-items: center;

  ${({ $isSelected }) =>
    $isSelected
      ? css`
          cursor: default;
        `
      : css`
          &:hover,
          :focus,
          :focus:hover {
            ${StyledIconContainer} {
              color: ${colors.dark};
            }
            text-decoration: underline;
          }
        `};
`;

const variantToStyles: Record<SelectVariant, FlattenSimpleInterpolation> = {
  filled: css`
    ${StyledButton} {
      background-color: ${colors.gray9};
      color: ${colors.dark};
      border: none;
    }

    ${StyledDropdown} {
      background-color: white;
      margin-top: 2px;
    }

    ${DropdownItem} {
      padding: 8px 0;

      /*       :not(:last-child) {
        border-bottom: 1px solid ${colors.gray8};
      } */
    }
  `,
  outlined: css`
    ${StyledButton} {
      background-color: transparent;
      color: ${colors.dark};
      padding: 0px;
      border: none;
    }

    ${StyledDropdown} {
      background-color: white;
      margin-top: 2px;
    }

    ${DropdownItem} {
      padding: 8px 0;

      /*       :not(:last-child) {
        border-bottom: 1px solid ${colors.gray8};
      } */
    }
  `,
};

const sizeToStyles: Record<SelectSize, FlattenSimpleInterpolation> = {
  medium: css`
    ${StyledButton} {
      font-size: 18px;
      border: none;
    }

    ${StyledCaretDownIcon} {
      font-size: 20px;
      color: ${colors.primary};
    }

    ${StyledDropdown} {
      background-color: white;
      padding: 8px 11px;
      border-radius: 14px;
      font-size: 12px;
      font-weight: 500;
    }
  `,
  small: css`
    ${StyledButton} {
      border-radius: 14px;
      font-size: 12px;
      border: none;
    }

    ${StyledCaretDownIcon} {
      font-size: 16px;
    }

    ${StyledDropdown} {
      background-color: white;
      padding: 0px 20px 3px 11px;
      border-radius: 14px;
      font-size: 12px;
      font-weight: 500;
    }
  `,
};
