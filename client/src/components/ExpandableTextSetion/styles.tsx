import { Typography } from "@packages/uiKit";
import styled from "styled-components";

export const StyledExpandableTextSection = styled.section``;

export const StyledTitle = styled(Typography).attrs({
  size: 22,
  weight: 700,
  forwardedAs: "h2",
})`
  margin-bottom: 13px;
`;

export const StyledContent = styled(Typography).attrs({
  size: 16,
  lineHeightMiltiplier: 1.4,
})`
  white-space: pre-wrap;
`;
