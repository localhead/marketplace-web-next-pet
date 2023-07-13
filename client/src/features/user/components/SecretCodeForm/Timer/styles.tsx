import { ClockIcon } from "@packages/icons";
import { Typography } from "@packages/uiKit";
import styled from "styled-components";

export const StyledTimer = styled.div`
  height: 20px;
`;

export const StyledTimeLeft = styled(Typography).attrs({
  size: 18,
  weight: 700,
  color: "dark",
})``;

export const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
`;

export const StyledClockIcon = styled(ClockIcon)``;
