import { media } from "@features/adaptive/breakpoints";
import { Typography } from "../Typography";

import { colors } from "../utils";

import styled, { css } from "styled-components";

export const StyledPropsTable = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 10px;
  margin-top: 12px;
  width: 700px;
`;

export const StyledLabel = styled(Typography).attrs({
  size: 12,
  weight: 500,
  color: "gray3",
})`
  flex: 1;

  border-bottom: 1px solid ${colors.gray7};
`;

export const StyledValue = styled(Typography).attrs({
  size: 16,
  weight: 400,
  color: "dark",
  ellipsis: true,
  maxLines: 1,
  lines: 1,
})<{
  $variant: "default" | "bold";
}>`
  padding-top: 8px;
  border-bottom: 1px solid ${colors.gray7};
  flex: 3;
  height: 50px;

  ${({ $variant }) => {
    return $variant === "default"
      ? css`
          ${media.down("desktop")} {
            font-size: 12px;
            font-weight: 500;
          }
          font-weight: 400;
        `
      : css`
          font-weight: 700;
        `;
  }}
`;
