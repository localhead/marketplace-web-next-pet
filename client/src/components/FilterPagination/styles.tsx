import { media } from "@features/adaptive/breakpoints";
import { Divider } from "@packages/uiKit";
import styled from "styled-components";

export const StyledFilterPagination = styled.div`
  scroll-margin-top: 100px;
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 45px;
  grid-template-areas:
    "filter  itemsGrid"
    "divider divider"
    ".       pagination";

  ${media.down("tablet")} {
    grid-template-columns: 1fr;
    gap: 30px;
    grid-template-areas:
      "filter"
      "itemsGrid"
      "divider"
      "pagination";
  }

  > * {
    min-width: 0;
  }
`;

export const StyledFilter = styled.div`
  grid-area: filter;
  width: 190px;
  min-width: 190px;
  gap: 30px;
  display: flex;
  flex-direction: column;
  ${media.down("tablet")} {
    width: 100%;
    min-width: 190px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
  }
`;

export const StyledItemsGrid = styled.div`
  grid-area: itemsGrid;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 15px;
`;

export const StyledPaginationArea = styled.div`
  grid-area: pagination;
`;

export const StyledDivider = styled(Divider)`
  grid-area: divider;
`;
