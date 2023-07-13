import styled from "styled-components";

export const StyledMultipleSlider = styled.div`
  display: flex;
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

export const StyledSlideButtonContainer = styled.div`
  width: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
