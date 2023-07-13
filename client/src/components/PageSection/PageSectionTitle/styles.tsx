import { media } from "@features/adaptive/breakpoints";
import { colors, Typography } from "@packages/uiKit";
import styled from "styled-components";

export const StyledPageSectionTitle = styled.div`
  margin-bottom: 25px;
  padding-bottom: 19px;
  border-bottom: 1px solid ${colors.gray12};

  ${media.down("desktop")} {
    margin-bottom: 38px;
    padding-bottom: 14px;
  }
`;

export const StyledTitle = styled(Typography).attrs({
  size: 38,
  forwardedAs: "h1",
})`
  ${media.down("desktop")} {
    font-size: 28px;
  }
`;
