import { colors, Typography } from "@packages/uiKit";
import styled, { css } from "styled-components";

export const StyledProperty = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const StyledSmallTitle = styled(Typography).attrs({
  weight: 500,
  lines: 1,
  color: "white",
  maxLines: 1,
  ellipsis: true,
})<{ $size: "small" | "default" }>`
  ${({ $size }) =>
    $size === "default"
      ? css`
          font-size: 16px;
        `
      : css`
          font-size: 14px;
        `}
`;

export const StyledLabel = styled(Typography).attrs({
  size: 12,
  weight: 400,
  lines: 1,
  color: "white",
  maxLines: 1,
  ellipsis: true,
})`
  color: ${colors.white};
  opacity: 0.5;
`;
