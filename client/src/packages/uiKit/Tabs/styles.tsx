import { TabsSize, TabsVariant } from "./types";

import { Typography } from "../Typography";

import { media } from "@features/adaptive/breakpoints";
import { colors } from "@packages/uiKit/utils/colors";
import styled, { css } from "styled-components";

export const StyledTabs = styled.div<{
  scroll: boolean;
  variant: TabsVariant;
}>`
  display: flex;
  flex-wrap: wrap;

  ${({ scroll }) =>
    scroll &&
    css`
      flex-wrap: nowrap;
      gap: 10px;
      overflow-x: auto;
      padding-bottom: 20px;
    `}

  ${({ variant }) =>
    variant === "round" &&
    css`
      gap: 10px;
    `}
`;

export const StyledTabItem = styled(Typography)<{
  isSelected: boolean;
  variant: TabsVariant;
  $size: TabsSize;
}>`
  transition: 0.3s ease;

  font-weight: 400;
  padding: 6px 21px;

  ${media.down("desktop")} {
    font-size: 14px;
  }

  ${({ $size }) =>
    $size === "default"
      ? css`
          font-size: 16px;
        `
      : css`
          font-size: 14px;
        `}

  ${({ isSelected }) =>
    !isSelected &&
    css`
      cursor: pointer;
    `}

  ${(props) => getDynamicStyles(props)}
`;

const getDynamicStyles = (props: {
  isSelected: boolean;
  variant: TabsVariant;
  $size: TabsSize;
}) => {
  const { isSelected, variant, $size } = props;

  switch (variant) {
    case "round": {
      return css`
        border-radius: 24px;
        border-width: 1px;
        border-style: solid;

        ${media.down("desktop")} {
          white-space: nowrap;
        }
        ${isSelected
          ? css`
              color: ${colors.primary};
              background-color: transparent;
              border-color: ${colors.primary};
            `
          : css`
              color: ${colors.dark};
              background-color: transparent;
              border-color: ${colors.gray1};
            `}
      `;
    }
  }
};
