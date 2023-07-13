import { media } from "@features/adaptive/breakpoints";
import styled, { css } from "styled-components";
import { Container } from "../Container";

export const StyledContainerWithSidebar = styled(Container)`
  display: flex;

  gap: 20px;
  justify-content: space-between;
`;

export const StyledMain = styled.div`
  flex: 1;
  min-width: 0;
  max-width: 720px;

  ${media.down("desktop")} {
    max-width: none;
  }
`;

export const StyledSidebar = styled.div<{
  $width: number;
}>`
  ${({ $width }) =>
    css`
      width: ${$width}px;
    `}
`;
