import { media } from "@features/adaptive/breakpoints";
import { Typography } from "@packages/uiKit";
import styled from "styled-components";

export const StyledSection = styled.section`
  padding-top: 10px;
  padding-bottom: 10px;
`;

export const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  align-items: center;
  margin-bottom: 20px;
`;

export const StyledTitleH2 = styled(Typography).attrs({
  forwardedAs: "h2",
  size: 36,
  lineHeightMultiplier: 1.1,
  nowrap: true,
  ellipsis: true,
  weight: 400,
  color: "dark",
})`
  ${media.down("desktop")} {
    font-size: 30px;
    white-space: normal;
  }
  min-height: 0;
`;

export const StyledRight = styled.div``;

export const StyledContent = styled.div``;
