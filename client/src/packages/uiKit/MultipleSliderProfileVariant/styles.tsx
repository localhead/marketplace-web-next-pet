import { Typography } from "@packages/uiKit/Typography";
import styled from "styled-components";
export const StyledMultipleSliderProfileVariant = styled.div`
  display: flex;
  position: relative;
`;

export const StyledOverflowContainer = styled.div<{ $gap: number }>`
  /* padding: ${({ $gap }) => `${$gap / 2}px`}; */
  flex: 1;
  overflow: hidden;
`;

export const StyledTitle = styled(Typography).attrs({
  size: 22,
  weight: 700,
  color: "dark",
})``;

export const StyledNavContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledSlidesContainer = styled.div``;

export const StyledGrid = styled.div`
  position: relative;
  flex: 1;
  display: grid;
  transition: left 0.3s ease-out;
`;

export const StyledSlideButtonRightContainer = styled.div``;

export const StyledSlideButtonLeftContainer = styled.div``;

export const StyledButtons = styled.div`
  display: flex;
  gap: 10px;
`;
