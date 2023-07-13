import { usePagination } from "./hooks";
import {
  StyledDotsContainer,
  StyledPageButton,
  StyledPagesContainer,
  StyledPagination,
} from "./styles";

import { ArrowRightIcon } from "@packages/icons";
import { FC, memo } from "react";
import { Button } from "../Button";

export interface PaginationProps {
  pageIndex: number;
  pageCount: number;
  onChangePage: (pageIndex: number) => void;
}

const Dots = () => <StyledDotsContainer>...</StyledDotsContainer>;

const _Pagination: FC<PaginationProps> = (props) => {
  const { pageIndex, pageCount, onChangePage, ...restProps } = props;

  const canNextPage = pageIndex < pageCount;

  const onNextPage = () => {
    canNextPage && onChangePage(pageIndex + 1);
  };

  const pages = usePagination({
    currentPage: pageIndex,
    totalCount: pageCount,
  });

  return (
    <StyledPagination {...restProps}>
      <StyledPagesContainer>
        {pages.map((page, index) => {
          if (page === "dots") {
            return <Dots key={`dots_${index}`} />;
          }

          const isCurrent = page === pageIndex;

          const onClickHandler = !isCurrent
            ? () => {
                onChangePage(page);
              }
            : undefined;
          return (
            <StyledPageButton
              key={page}
              onClick={onClickHandler}
              $isCurrent={isCurrent}
            >
              {page}
            </StyledPageButton>
          );
        })}
      </StyledPagesContainer>
      <Button
        onClick={onNextPage}
        variant="text"
        size="medium"
        icon={<ArrowRightIcon />}
      ></Button>
    </StyledPagination>
  );
};

export const Pagination = memo(_Pagination);
