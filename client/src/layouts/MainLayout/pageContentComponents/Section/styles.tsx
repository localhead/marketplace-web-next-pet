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

export const StyledTitle = styled(Typography).attrs({
  forwardedAs: "h3",
  size: 36,
  lineHeightMiltiplier: 1.1,
  nowrap: true,
  ellipsis: true,
  weight: 700,
  color: "dark",
})`
  font-size: 36px;
  ${media.down("desktop")} {
    font-size: 30px;
    white-space: normal;
  }
  min-height: 0;
`;

export const StyledRight = styled.div``;

export const StyledContent = styled.div``;
