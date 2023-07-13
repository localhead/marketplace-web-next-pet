import styled, { css } from "styled-components";
import { Typography } from "../Typography";
import { colors } from "../utils";

export const StyledNavTabsItemNode = styled.div`
  filter: drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.07));
  //box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  background-color: ${colors.white};
  padding: 15px 16px 15px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
`;

export const StyledNavTabsItemLabel = styled(Typography).attrs({
  size: 12,
  weight: 500,
  color: "dark",
})`
  min-width: 0;
`;

export const StyledNavTabsItemIconContainer = styled.div`
  font-size: 28px;
  color: ${colors.primary};
  display: flex;
`;

export const StyledNavTabsItemNavLink = styled.div<{ $isSelected: boolean }>`
  cursor: pointer;

  ${({ $isSelected }) =>
    $isSelected &&
    css`
       {
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
    `}
`;
