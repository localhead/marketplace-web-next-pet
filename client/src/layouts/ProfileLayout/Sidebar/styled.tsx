import { Typography, colors } from "@packages/uiKit";
import styled, { css } from "styled-components";

export const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const StyledNavigationTitle = styled(Typography).attrs({
  size: 15,
  color: "dark",
})<{ $isActive: boolean }>`
  cursor: pointer;

  width: fit-content;

  color: ${colors.dark};

  :hover {
    color: ${colors.gray4};
  }

  transition: 0.5s ease;

  ${({ $isActive }) =>
    $isActive &&
    css`
      color: ${colors.gray4};
    `}
`;
