import { colors } from '../utils';

import styled from 'styled-components';

export const StyledBlotIcon = styled.div`
  background-color: ${colors.primary};
  border-radius: 22px;
  height: 58px;
  min-width: 32px;
  position: relative;
`;

export const StyledIcon = styled.div`
  font-size: 35px;
  position: absolute;
  bottom: 0;
  left: 0;
  transform: translate(40%, -5%);
`;
