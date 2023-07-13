import { colors, zIndexes } from "@packages/uiKit";
import styled, { css } from "styled-components";

export const StyledMainLayout = styled.div<{ $isShowBottomNav: boolean }>`
  min-height: 100vh;
  overflow: hidden;

  display: flex;
  flex-direction: column;

  ${({ $isShowBottomNav }) =>
    $isShowBottomNav &&
    css`
      padding-bottom: 70px;
    `}
`;

export const StyledContent = styled.main`
  flex: 1;
`;
