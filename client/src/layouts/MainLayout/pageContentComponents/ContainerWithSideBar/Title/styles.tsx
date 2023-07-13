import { media } from "@features/adaptive/breakpoints";
import { Typography } from "@packages/uiKit";
import styled from "styled-components";

export const StyledTitle = styled(Typography).attrs({
  forwardedAs: "h1",
  size: 36,
  weight: 700,
})`
  ${media.down("desktop")} {
    font-size: 30px;
  }
`;
