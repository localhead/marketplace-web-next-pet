import { colors } from "../utils";

import { media } from "@features/adaptive/breakpoints";
import { CaretLeftIcon } from "@packages/icons";
import Link from "next/link";
import styled from "styled-components";

export const StyledBreadCrumbs = styled.ol`
  display: flex;
  margin-top: 15px;
  margin-bottom: 15px;
  gap: 6px;
`;

export const StyledCaretLeftIcon = styled(CaretLeftIcon)`
  font-size: 12px;
`;

export const StyledListItem = styled.li`
  font-size: 12px;
  color: ${colors.gray4};
  display: flex;

  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;

  ${media.down("desktop")} {
    font-size: 10px;
  }

  &:hover {
    color: ${colors.dark};
    text-decoration: underline;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
  color: inherit;

  flex-direction: row;
  align-items: center;
  gap: 5px;

  :hover {
    color: inherit;
  }
`;

export const StyledItemInner = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
`;
