import styled, { css } from 'styled-components';

export const StyledGrid = styled.div<{ $cols: number; $gap: number }>`
  ${({ $cols, $gap }) => css`
    display: grid;
    grid-template-columns: repeat(${$cols}, 1fr);
    column-gap: ${$gap}px;
  `}
`;
