import { media } from "@features/adaptive/breakpoints";
import Image from "next/image";
import styled, { css } from "styled-components";
import { Typography } from "../Typography";
import { colors } from "../utils";

export const StyledLinkCardWide = styled.div<{
  $backGroundColor: "red" | "blue";
}>`
  height: 100%;
  position: relative;
  background: ${colors.white};
  border-radius: 20px;
  filter: drop-shadow(0px 12px 24px rgba(0, 0, 0, 0.06));
  display: grid;
  grid-template-rows: 1fr auto;

  grid-template-areas:
    "button image"
    "texts texts";

  ${({ $backGroundColor }) =>
    $backGroundColor === "blue"
      ? css`
          background: linear-gradient(
            323.63deg,
            #30a5c0 11.18%,
            rgba(48, 165, 192, 0) 100%
          );
        `
      : css`
          background: linear-gradient(
            323.63deg,
            #e63838 11.18%,
            rgba(229, 56, 56, 0) 100%
          );
        `}
`;

export const StyledButtonContainer = styled.div`
  padding: 30px 5px 30px 30px;
  grid-area: button;

  ${media.down("desktop")} {
    padding: 15px;
  }
`;

export const StyledTextsContainer = styled.div`
  grid-area: texts;
  padding: 30px 30px 30px 30px;
  ${media.down("desktop")} {
    padding: 30px 0px 30px 25px;
  }
  min-width: 0;
`;

export const StyledBottomLeftText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
`;

export const StyledAddition = styled(Typography).attrs({
  size: 12,
  weight: 500,
  color: "white",
})``;

export const StyledTitle = styled(Typography).attrs({
  size: 36,
  weight: 700,
  color: "white",
})`
  padding-right: 150px;
  ${media.down("desktop")} {
    font-size: 20px;
    padding-right: 50px;
  }
`;

export const StyledImageContainer = styled.div``;

export const StyledImage = styled(Image).attrs({ width: 300, height: 300 })`
  position: absolute;
  height: auto;
  width: 100%;
  max-width: 240px;
  top: 0;
  right: 0;

  ${media.down("desktop")} {
    max-width: 150px;
    font-size: 20px;
  }
`;
