import { media } from "@features/adaptive/breakpoints";
import { Section } from "@layouts/MainLayout/pageContentComponents/Section";
import { Button } from "@packages/uiKit";
import styled, { css } from "styled-components";
import { showMoreButtonParamsItem } from ".";

export const StyledInfiniteLoadSection = styled(Section)``;

export const StyledInner = styled.div<{ $showMoreGap?: number }>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${({ $showMoreGap }) => ($showMoreGap ? `${$showMoreGap}px` : "50px")};
`;

export const StyledContent = styled.div`
  width: 100%;
  max-width: 1285px;
  margin: auto;

  ${media.down("desktop")} {
    max-width: none;
  }
`;

export const StyledShowMoreArea = styled.div<{
  $showMoreButtonParams: showMoreButtonParamsItem;
}>`
  ${media.down("tablet")} {
    align-self: stretch;
  }

  ${({ $showMoreButtonParams }) =>
    $showMoreButtonParams.position === "left"
      ? css`
          align-self: flex-start;
        `
      : $showMoreButtonParams.position === "right"
      ? css`
          align-self: flex-end;
        `
      : css`
          align-self: center;
        `}
`;

export const StyledShowMoreButton = styled(Button).attrs({
  size: "extralarge",
  variant: "outlined",
  block: true,
})<{ $showMoreButtonParams: showMoreButtonParamsItem }>`
  ${({ $showMoreButtonParams }) =>
    $showMoreButtonParams.minWidth &&
    css`
      min-width: ${$showMoreButtonParams.minWidth}px;
    `}
  ${media.down("desktop")} {
    font-size: 18px;
  }
`;
