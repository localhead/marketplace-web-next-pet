import { StyledDetail } from '../Detail/styles';

import styled from 'styled-components';

export const StyledDetailList = styled.div`
  ${StyledDetail} {
    :not(:first-child) {
      border-top: none;
    }
  }
`;
