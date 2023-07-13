import { Container } from "@layouts/MainLayout/pageContentComponents/Container";
import {
  StyledContent,
  StyledInfiniteLoadSection,
  StyledInner,
  StyledShowMoreArea,
  StyledShowMoreButton,
} from "./styles";

import { useWindowWidth } from "@features/adaptive/useWindowWidth";
import React, { forwardRef, PropsWithChildren } from "react";

export type showMoreButtonParamsItem = {
  position: "left" | "center" | "right";
  minWidth: number;
  size?: "medium" | "large";
};
export interface InfiniteLoadSectionProps extends PropsWithChildren {
  className?: string;
  style?: React.CSSProperties;
  title?: string;
  showMoreText?: string;
  onShowMore?: () => void;
  showMoreGap?: number;
  showMoreVisible?: boolean;
  showMoreButtonParams?: showMoreButtonParamsItem;
}

export const InfiniteLoadSection = forwardRef<
  HTMLElement,
  InfiniteLoadSectionProps
>((props, ref) => {
  const {
    title,
    children,
    showMoreText = "Показать больше",
    onShowMore,
    showMoreGap,
    showMoreVisible = true,
    showMoreButtonParams = { minWidth: 250, position: "center" },
    ...restProps
  } = props;

  const width = useWindowWidth();

  return (
    <StyledInfiniteLoadSection ref={ref} title={title} {...restProps}>
      <StyledInner $showMoreGap={showMoreGap}>
        <StyledContent>{children}</StyledContent>

        {showMoreVisible &&
          (width === "mobile" ? (
            <Container>
              <StyledShowMoreArea $showMoreButtonParams={showMoreButtonParams}>
                <StyledShowMoreButton
                  onClick={onShowMore}
                  $showMoreButtonParams={showMoreButtonParams}
                >
                  {showMoreText}
                </StyledShowMoreButton>
              </StyledShowMoreArea>
            </Container>
          ) : (
            <StyledShowMoreArea $showMoreButtonParams={showMoreButtonParams}>
              <StyledShowMoreButton
                onClick={onShowMore}
                $showMoreButtonParams={showMoreButtonParams}
              >
                {showMoreText}
              </StyledShowMoreButton>
            </StyledShowMoreArea>
          ))}
      </StyledInner>
    </StyledInfiniteLoadSection>
  );
});

InfiniteLoadSection.displayName = "InfiniteLoadSection";
