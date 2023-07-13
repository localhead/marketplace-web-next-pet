import styled, { css } from 'styled-components';

export const StyledRadioGroup = styled.div<{ $cols: number }>`
  display: grid;

  row-gap: 12px;
  column-gap: 40px;

  ${({ $cols }) =>
    css`
      grid-template-columns: repeat(${$cols}, max-content);
    `}
`;
