import { Typography, colors } from "@packages/uiKit";
import styled from "styled-components";

export const StyledFormAdditionalButton = styled.div``;

export const StyledResetPasswordTitle = styled(Typography).attrs({
  size: 12,
  weight: 500,
  color: "gray8",
})`
  text-align: left;
`;

export const StyledIcon = styled.div`
  color: ${colors.gray8};
`;
