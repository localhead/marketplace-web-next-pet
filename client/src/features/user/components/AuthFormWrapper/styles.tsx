import { Typography, colors } from "@packages/uiKit";
import styled, { css } from "styled-components";

export const StyledAuthFormWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const StyledTitle = styled(Typography).attrs({
  size: 36,
  weight: 700,
  color: "dark",
})``;

export const StyledDescription = styled(Typography).attrs({
  size: 18,
  weight: 400,
  color: "gray14",
})`
  margin-top: 8px;
  margin-bottom: 40px;
`;

export const StyledContainer = styled.div<{ $width: number }>`
  border: 1px solid ${colors.primary};
  padding: 53px 70px;
  border-radius: 60px;

  ${({ $width }) =>
    $width &&
    css`
      width: ${$width}px;
    `}
`;
