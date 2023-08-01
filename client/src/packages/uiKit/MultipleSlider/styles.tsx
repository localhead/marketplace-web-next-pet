import styled, { css } from "styled-components";

export const StyledMultipleSlider = styled.div`
  overflow: hidden;
`;

export const StyledGrid = styled.div`
  position: relative;
  display: grid;
  transition: left 0.3s ease-out;
`;

export const StyledGridItem = styled.div<{ $isSquare: boolean }>`
  /* width: 100%;
  ${({ $isSquare }) =>
    $isSquare &&
    css`
      :before {
        content: "";
        display: block;
        height: 0;
        width: 0;
        padding-bottom: calc(100%);
      }
    `}*/
`;
