import { Typography, colors } from "@packages/uiKit";
import styled from "styled-components";

export const StyledFooterMainColumnSections = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const StyledColumnContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export const StyledIcon = styled.div`
  color: ${colors.white};
  font-size: 12px;
`;

export const StyledColumnContainerLabel = styled(Typography).attrs({
  size: 12,
  weight: 400,
  color: "white",
})`
  cursor: pointer;

  :hover {
    text-decoration: underline;
  }
`;

export const StyledTitle = styled(Typography).attrs({
  size: 24,
  weight: 400,
  color: "white",
})``;
