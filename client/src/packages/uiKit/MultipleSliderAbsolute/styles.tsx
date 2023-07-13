import styled from "styled-components";

export const StyledMultipleSliderAbsolute = styled.div`
  display: flex;
  position: relative;
`;

export const StyledOverflowContainer = styled.div<{ $gap: number }>`
  padding: ${({ $gap }) => `${$gap / 2}px`};
  flex: 1;
  overflow: hidden;
`;

export const StyledSlidesContainer = styled.div``;

export const StyledGrid = styled.div`
  position: relative;
  flex: 1;
  display: grid;
  transition: left 0.3s ease-out;
`;

export const StyledSlideButtonRightContainer = styled.div`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translate(-150%, -75%);
`;

export const StyledSlideButtonLeftContainer = styled.div`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translate(150%, -75%);
`;
