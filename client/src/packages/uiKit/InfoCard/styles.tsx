import { colors } from '../utils';

import styled from 'styled-components';

export const StyledInfoCard = styled.div`
  border-radius: 18px;
  border: 1px solid ${colors.gray7};

  background: ${colors.white};

  display: flex;
  flex-direction: column;
  gap: 20px;
`;
