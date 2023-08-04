import { Typography, colors } from "@packages/uiKit";
import styled from "styled-components";

export const StyledFooterBottomLineSection = styled.div`
  padding-top: 30px;
  border-top: 1px solid ${colors.dark4};
  display: flex;
  gap: 65px;
`;

export const StyledText = styled(Typography).attrs({
  size: 12,
  color: "gray1",
})``;
