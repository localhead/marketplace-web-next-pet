import { KeyIcon } from "@packages/icons";
import { Typography, colors } from "@packages/uiKit";
import styled from "styled-components";

export const StyledLoginForm = styled.div``;

export const StyledResetPasswordTitle = styled(Typography).attrs({
  size: 12,
  weight: 500,
  color: "gray8",
})`
  text-align: left;
`;

export const StyledKeyIcon = styled(KeyIcon)`
  color: ${colors.gray8};
`;
