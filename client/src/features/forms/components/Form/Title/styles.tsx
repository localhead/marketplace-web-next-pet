import { media } from "@features/adaptive/breakpoints";
import { Typography } from "@packages/uiKit";
import styled from "styled-components";

export const StyledTitle = styled(Typography).attrs({
  weight: 500,
  size: 30,
  color: "dark",
})`
  margin-bottom: 16px;

  ${media.down("tablet")} {
    margin-bottom: 12px;
  }
`;
