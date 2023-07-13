import { media } from "@features/adaptive/breakpoints";
import styled from "styled-components";

export const StyledButtonsContainer = styled.div`
  margin-top: 45px;

  ${media.down("tablet")} {
    margin-top: 20px;
  }
`;
