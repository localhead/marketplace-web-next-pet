import React, { FC, memo } from "react";
import ContentLoader from "react-content-loader";

import { StyledOrderCardSkeleton } from "./styles";

export interface OrderCardSkeletonProps {
  className?: string;
  style?: React.CSSProperties;

  isLoading: boolean;
}

const _CardSkeleton: FC<OrderCardSkeletonProps> = (props) => {
  const { isLoading, ...restProps } = props;

  return (
    <StyledOrderCardSkeleton {...restProps}>
      <ContentLoader
        uniqueKey="select-cards-skeleton"
        viewBox="0 0 219 66"
        height="66px"
        width="100%"
        preserveAspectRatio="none"
        animate={isLoading}
        title={isLoading ? "Загрузка..." : ""}
      >
        <rect width="219" height="66" rx="5" />
      </ContentLoader>
    </StyledOrderCardSkeleton>
  );
};

export const CardSkeleton = memo(_CardSkeleton);
