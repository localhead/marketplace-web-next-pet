import { media } from "@features/adaptive/breakpoints";
import styled from "styled-components";
import { Typography } from "../Typography";
import { colors } from "../utils";

export const StyledOfferCard = styled.div`
  height: 100%;
  width: 100%;

  border-radius: 20px;
  border: 1px solid ${colors.gray1};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 30px;
  ${media.down("desktop")} {
    padding: 0px;
    padding-top: 30px;
    border: none;
    gap: 25px;
  }
`;

export const StyledTitle = styled(Typography).attrs({
  size: 24,
  weight: 400,
  color: "dark",
})`
  padding-right: 300px;
  ${media.down("desktop")} {
    padding-right: 100px;
  }
`;

export const StyledStepsContainer = styled.div`
  display: flex;
  ${media.down("desktop")} {
    flex-direction: column;
    gap: 15px;
  }
`;

export const StyledStepsColContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  ${media.down("desktop")} {
    flex-direction: row;
  }
`;

export const StyledTag = styled.div`
  font-weight: 700;
  font-size: 16px;
  color: ${colors.primary};
  background-color: white;
  padding: 5px 10px 4px 9px;
  display: flex;
  border-radius: 50%;
  width: 28px;
  height: 28px;
`;

export const StyledStepDescription = styled(Typography).attrs({
  size: 18,
  weight: 500,
  color: "dark",
})`
  padding-right: 20px;
`;

export const StyledButtonsContainer = styled.div`
  display: flex;
  gap: 10px;
`;
