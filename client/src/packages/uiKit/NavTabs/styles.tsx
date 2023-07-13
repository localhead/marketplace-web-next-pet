import { NavLink } from "@components/NavLink";
import { media } from "@features/adaptive/breakpoints";
import styled, { css } from "styled-components";
import { Typography } from "../Typography";
import { colors } from "../utils";

export const StyledNavTabs = styled.div<{ $columns: number }>`
  display: grid;
  grid-template-columns: ${({ $columns }) => `repeat(${$columns}, 1fr)`};
  gap: 15px;
  ${media.down("desktop")} {
    overflow-x: auto;
    padding-bottom: 15px;
  }
`;

export const StyledNavTabsItemNode = styled.div<{
  $isSelected: boolean;
}>`
  filter: drop-shadow(0px 12px 24px rgba(0, 0, 0, 0.07));
  border-radius: 20px;
  background-color: ${colors.white};
  padding: 15px 16px 15px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;

  ${media.down("desktop")} {
    width: 110px;
    padding: 15px 16px 15px 15px;
    justify-content: center;
    filter: drop-shadow(0px 2px 12px rgba(0, 0, 0, 0.07));
  }

  ${({ $isSelected }) =>
    $isSelected &&
    css`
      background: transparent;
      border: 1px solid ${colors.primary};
      color: ${colors.primary};
    `}
`;

export const StyledNavTabsItemLabel = styled(Typography).attrs({
  size: 12,
  weight: 500,
  color: "dark",
})<{
  $isSelected: boolean;
}>`
  min-width: 0;

  ${({ $isSelected }) =>
    $isSelected &&
    css`
      color: ${colors.primary};
    `}
`;

export const StyledNavTabsItemIconContainer = styled.div`
  font-size: 28px;
  color: ${colors.primary};
  display: flex;
`;

export const StyledNavTabsItemNavLink = styled(NavLink)`
  &.active {
    ${StyledNavTabsItemNode} {
      background: transparent;
      border: 1px solid ${colors.primary};
      color: ${colors.primary};
    }

    ${StyledNavTabsItemIconContainer} {
    }

    ${StyledNavTabsItemLabel} {
      color: ${colors.primary};
    }
  }
`;
