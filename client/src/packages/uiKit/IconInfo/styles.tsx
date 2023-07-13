import styled from "styled-components";
import { Typography } from "../Typography";
import { colors } from "../utils";

export const StyledIconInfo = styled.div``;

export const StyledIconContainer = styled.div`
  font-size: 64px;
  color: ${colors.primary};
  margin-bottom: 15px;
  display: flex;
`;

export const StyledTitle = styled(Typography).attrs({
  weight: 700,
  size: 24,
})`
  margin-bottom: 18px;
`;

export const StyledDescription = styled(Typography).attrs({
  size: 18,
})`
  white-space: pre-wrap;
`;
