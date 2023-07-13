import { media } from "@features/adaptive/breakpoints";
import styled from "styled-components";
import { Typography } from "../Typography";
import { colors } from "../utils";

export const StyledAdvantageCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-top: 55px;

  ${media.down("desktop")} {
    gap: 25px;
    padding-top: 0px;
  }
`;

export const StyledTopContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  ${media.down("desktop")} {
    gap: 25px;
    align-items: center;
  }
`;

export const StyledIcon = styled.div`
  font-size: 62px;
  color: ${colors.primary};

  ${media.down("desktop")} {
    display: flex;
  }
`;

export const StyledLine = styled.div`
  height: 1px;
  background-color: ${colors.gray13};
  margin-bottom: 10px;
  width: 100%;
`;

export const StyledTitle = styled(Typography).attrs({
  size: 18,
  weight: 400,
  color: "dark",
})`
  white-space: pre-wrap;
`;
