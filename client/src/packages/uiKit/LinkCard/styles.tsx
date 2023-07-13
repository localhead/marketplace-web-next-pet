import { media } from "@features/adaptive/breakpoints";
import Image from "next/image";
import styled, { css } from "styled-components";
import { Typography } from "../Typography";
import { colors } from "../utils";
import { LinkCardColor } from "./types";

export const StyledLinkCard = styled.div<{ $color: LinkCardColor }>`
  height: 100%;

  background: ${colors.white};
  border-radius: 20px;
  filter: drop-shadow(0px 12px 24px rgba(0, 0, 0, 0.06));
  display: grid;
  grid-template-rows: 1fr auto;
  row-gap: 60px;
  grid-template-areas:
    "button image"
    "texts texts";

  ${media.down("desktop")} {
    display: grid;
    grid-template-columns: 1.2fr 1fr;
    row-gap: 20px;
    grid-template-areas:
      "button image"
      "texts image";
  }

  ${({ $color }) =>
    $color === "white"
      ? css`
          ${StyledAddition} {
            color: ${colors.primary};
          }
        `
      : $color === "primary"
      ? css`
          background: linear-gradient(
            323.63deg,
            ${colors.primary} 11.18%,
            rgba(48, 165, 192, 0) 100%
          );
          ${StyledAddition},${StyledTitle} {
            color: ${colors.white};
          }
        `
      : ""}
`;

export const StyledButtonContainer = styled.div`
  grid-area: button;
  padding: 30px 5px 30px 30px;

  ${media.down("desktop")} {
    padding: 15px;
  }
`;

export const StyledTextsContainer = styled.div`
  grid-area: texts;
  padding: 10px 30px 30px 30px;
  ${media.down("desktop")} {
    padding: 0px 0px 20px 15px;
  }
  min-width: 0;
`;

export const StyledTitle = styled(Typography).attrs({
  size: 24,
})`
  ${media.down("desktop")} {
    font-size: 20px;
  }
`;

export const StyledAddition = styled(Typography).attrs({ size: 14 })`
  margin-bottom: 17px;
  ${media.down("desktop")} {
    white-space: nowrap;
  }
`;

export const StyledImageContainer = styled.div`
  grid-area: image;
  min-height: 0;
  position: relative;
`;

export const StyledImage = styled(Image).attrs({ width: 800, height: 800 })`
  position: absolute;
  height: auto;
  width: 200%;
  max-width: 200px;
  top: 0;
  right: 0;

  ${media.down("desktop")} {
    max-width: 150px;
    font-size: 20px;
  }
`;
