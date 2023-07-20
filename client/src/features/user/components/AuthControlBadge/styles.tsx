import { Typography, colors } from "@packages/uiKit";
import styled, { css } from "styled-components";

export const StyledAuthControlBadge = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 10px;
  border: 1px solid ${colors.gray3};
  width: fit-content;
  border-radius: 10px;
`;

export const StyledIsAuthStatus = styled(Typography).attrs({
  size: 18,
  weight: 500,
  color: "dark",
})<{ $isSuccessLoginCheck: boolean }>`
  padding: 8px;
  border-radius: 10px;

  ${({ $isSuccessLoginCheck }) =>
    !$isSuccessLoginCheck
      ? css`
          color: white;
          background-color: red;
        `
      : css`
          color: white;
          background-color: green;
        `}
`;

export const StyledUserDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const StyledUserDataTextLine = styled(Typography).attrs({
  size: 14,
  weight: 500,
  color: "dark",
})``;
