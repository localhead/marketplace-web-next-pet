import { Typography } from "@packages/uiKit";
import styled from "styled-components";

export const StyledAuthButton = styled.div``;

export const StyledUsernameTitle = styled(Typography).attrs({
  size: 12,
  weight: 500,
  ellipsis: true,
})`
  margin-left: 5px;
  max-width: 60px;
  min-width: 0px;
  white-space: nowrap;
`;
