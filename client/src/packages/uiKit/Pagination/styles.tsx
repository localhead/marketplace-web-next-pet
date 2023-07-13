import { Typography } from "../Typography";
import { colors } from "../utils";

import { CaretLeftIcon } from "@packages/icons";
import { Button } from "@packages/uiKit/Button";
import styled, { css } from "styled-components";

export const StyledPagination = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;
`;

export const StyledCaretLeftIcon = styled(CaretLeftIcon)`
  width: 20px;
  height: 20px;
`;

export const StyledPrevButton = styled(Button).attrs({
  icon: <StyledCaretLeftIcon />,
})`
  padding: 8px;
`;

export const StyledPageButton = styled(Button).attrs({
  variant: "outlined",
})<{ $isCurrent: boolean }>`
  min-width: 38px;
  height: 28px;
  width: 38px;
  padding: 0px 0px 0px 0px;
  border-radius: 10px;

  ${({ $isCurrent }) =>
    $isCurrent
      ? css`
          background-color: ${colors.dark};
          border: 1px solid ${colors.dark};
          color: white;
          &:hover {
            background-color: ${colors.dark};
            border: 1px solid ${colors.dark};
            color: white;
          }
        `
      : css`
          background-color: ${colors.backgroundColorHeader};
          border: 1px solid ${colors.backgroundColorHeader};
          color: ${colors.gray8};
          &:hover {
            background-color: ${colors.white};
            border: 1px solid ${colors.backgroundColorHeader};
            color: ${colors.gray8};
          }
        `}
`;

export const StyledPagesContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  overflow-x: auto;
  min-width: 0;
`;

export const StyledDotsContainer = styled(Typography)``;
