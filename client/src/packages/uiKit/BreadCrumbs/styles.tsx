import { Typography } from "../Typography";
import { colors } from "../utils";

import { media } from "@features/adaptive/breakpoints";
import { CaretLeftIcon } from "@packages/icons";
import Link from "next/link";
import styled from "styled-components";

export const StyledBreadCrumbs = styled.div`
  display: flex;
  gap: 6px;
  overflow-x: auto;
  width: 100%;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
`;

export const StyledCaretLeftIcon = styled(CaretLeftIcon)`
  font-size: 12px;
`;

export const StyledLinkItem = styled(Typography).attrs({})`
  font-size: 12px;
  color: ${colors.gray4};
  display: flex;
  flex-direction: row;
  align-items: center;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;

  ${media.down("desktop")} {
    font-size: 10px;
  }

  gap: 5px;
  &:hover {
    color: ${colors.dark};
    text-decoration: underline;
  }
`;
