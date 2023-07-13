import { Button } from "../Button";

import styled, { css } from "styled-components";
import { colors } from "../utils";

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
        `}
`;

export const StyledExpandButton = styled(Button).attrs({
  variant: "text",
  size: "medium",
})`
  margin-top: 10px;
  color: ${colors.primary};
  font-weight: 500;

  border-radius: 0%;
`;
