import { colors } from "@packages/uiKit";
import Link from "next/link";
import styled, { css } from "styled-components";

export const StyledProductNavigationLink = styled(Link)<{
  $isFirst: boolean;
}>`
  color: ${colors.dark};
  font-weight: 400;
  font-size: 16px;

  :hover {
    color: ${colors.dark};
  }

  ${({ $isFirst }) =>
    $isFirst &&
    css`
      color: ${colors.red};
    `}
`;
