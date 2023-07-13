import { WindowWidth } from "@features/adaptive/types";
import styled, { css } from "styled-components";

export const StyledContainerWide = styled.div<{
  $width?: WindowWidth;
}>`
  ${({ $width }) =>
    $width === "desktop"
      ? css`
          max-width: 1445px;
          padding: 0 20px;
          margin: auto;
        `
      : css``}
`;
