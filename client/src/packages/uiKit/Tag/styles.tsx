import { colors } from '../utils';

import styled from 'styled-components';

export const StyledTag = styled.div`
  padding: 3px 13px;

  border: 1px solid ${colors.blueGray};
  border-radius: 11px;

  text-align: center;
  line-height: 120%;
  font-size: 11px;
  background-color: ${colors.white};
`;
