import { Typography } from "@packages/uiKit";
import styled from "styled-components";

export const StyledDescription = styled(Typography).attrs({
  forwardedAs: "p",
  size: 12,
  weight: 400,
  color: "gray10",
})`
  white-space: pre-wrap;
`;
