import { media } from '@features/adaptive/breakpoints';
import styled from 'styled-components';

export const StyledSteps = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 1fr;
  gap: 15px;

  ${media.down('desktop')} {
    grid-template-columns: repeat(2, 1fr);
    grid-auto-flow: row;
    column-gap: 40px;
    row-gap: 57px;
  }

  ${media.down('tablet')} {
    grid-template-columns: 1fr;
  }
`;
