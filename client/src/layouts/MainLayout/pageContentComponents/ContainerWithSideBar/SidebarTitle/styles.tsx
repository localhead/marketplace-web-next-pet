import { Typography } from "@packages/uiKit";
import styled from "styled-components";

export const StyledSidebarTitle = styled(Typography).attrs({
  forwardedAs: "h2",
  size: 36,
  weight: 400,
  color: "blueGray3",
})`
  white-space: pre-wrap;
`;
