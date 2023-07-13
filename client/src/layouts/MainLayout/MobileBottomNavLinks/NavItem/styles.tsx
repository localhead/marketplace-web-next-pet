import { NavLink } from "@components/NavLink";
import { colors, Typography } from "@packages/uiKit";
import styled from "styled-components";

export const StyledLabel = styled(Typography).attrs({
  color: "dark",
  size: 10,
})`
  text-align: center;
`;

export const StyledNavIconContainer = styled.div<{}>`
  font-size: 24px;
`;

export const StyledNavLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;

  :hover {
    color: ${colors.gray2};
  }
`;

export const StyledNavItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;

  cursor: pointer;
`;
