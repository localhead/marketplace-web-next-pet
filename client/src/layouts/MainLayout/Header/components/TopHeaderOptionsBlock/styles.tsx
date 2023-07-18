import { Typography, colors } from "@packages/uiKit";
import styled from "styled-components";

export const StyledTopHeaderOptionsBlock = styled.div`
  background-color: ${colors.dark};
  margin: 0 auto;
`;

export const StyledTitle = styled(Typography).attrs({
  size: 14,
  color: "white",
  weight: 400,
})`
  text-align: center;
  padding-top: 5px;
  padding-bottom: 5px;
  text-decoration: underline;
  cursor: pointer;
`;
