import { Typography } from '../Typography';

import { colors } from '../utils';

import styled from 'styled-components';

export const StyledPropsTable = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 10px;
`;

export const StyledLabel = styled(Typography).attrs({
  size: 12,
  weight: 500,
  color: 'gray3',
})`
  flex: 1;

  border-bottom: 1px solid ${colors.gray7};
`;

export const StyledValue = styled(Typography).attrs({
  size: 12,
  weight: 500,
  color: 'dark2',
})`
  padding-bottom: 8px;
  border-bottom: 1px solid ${colors.gray7};
  flex: 3;
`;
