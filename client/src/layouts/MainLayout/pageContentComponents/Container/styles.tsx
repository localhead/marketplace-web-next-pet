import { WindowWidth } from "@features/adaptive/types";
import styled, { css } from "styled-components";

export const StyledContainer = styled.div<{
  $width?: WindowWidth;
}>`
  width: 100%;
  margin: auto;

  padding: 0 20px;

  ${({ $width }) =>
    $width === "desktop" &&
    css`
      max-width: 1285px;
      padding: 0px 20px;
    `}
`;
