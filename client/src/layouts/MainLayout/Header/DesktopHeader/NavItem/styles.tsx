import { NavLink } from "@components/NavLink";
import { colors } from "@packages/uiKit";
import styled from "styled-components";

export const StyledNavItem = styled(NavLink)`
  color: ${colors.dark};
  font-size: 12px;
  font-weight: 500;
  line-height: 120%;

  white-space: nowrap;
  overflow: hidden;

  &.active {
    color: ${colors.dark};
  }

  :hover {
    color: ${colors.dark};
    text-decoration: underline;
  }
`;
