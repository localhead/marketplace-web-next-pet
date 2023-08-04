import { Typography } from "@packages/uiKit";
import styled from "styled-components";

export const StyledSearchPage = styled.div``;

export const StyledSearchResultsContainer = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 10px;
`;

export const StyledSearchResultsTitle = styled(Typography).attrs({
  size: 22,
  weight: 400,
  color: "dark",
})``;

export const StyledSearchResultsAmount = styled(Typography).attrs({
  size: 16,
  weight: 400,
  color: "gray1",
})``;
