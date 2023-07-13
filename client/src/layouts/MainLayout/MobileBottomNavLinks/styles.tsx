import { media } from "@features/adaptive/breakpoints";
import { colors, zIndexes } from "@packages/uiKit";
import styled from "styled-components";

export const StyledMobileBottomNavLinks = styled.div`
  margin-top: auto;
  position: fixed;
  z-index: ${zIndexes.mobileBottomNavigation};
  bottom: 0;
  width: 100vw;
  background-color: ${colors.white};
  padding: 11px 20px;
  display: flex;
  justify-content: center;
  height: 70px;
  border-top: 1px solid ${colors.gray1};
`;

export const StyledNavList = styled.div`
  display: flex;
  gap: 30px;

  ${media.down(400)} {
    gap: 8px;
  }
`;
