import { Button } from "../Button";

import styled, { css } from "styled-components";

export const StyledExpandableContent = styled.div``;

export const StyledContent = styled.div<{
  $isExpanded: boolean;
  $isExpandHeight: boolean;
  $maxHeight: number;
}>`
  overflow: hidden;

  ${({ $isExpanded, $isExpandHeight, $maxHeight }) =>
    $isExpanded
      ? css``
      : $isExpandHeight &&
        css`
          max-height: ${$maxHeight}px;
          -webkit-mask-image: -webkit-linear-gradient(
            top,
            rgba(0, 0, 0, 1) 0%,
            rgba(0, 0, 0, 0) 95%
          );
        `}
`;

export const StyledExpandButton = styled(Button).attrs({
  variant: "text",
  size: "large",
})`
  margin-top: 10px;
`;
