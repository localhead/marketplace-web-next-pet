import { Typography } from '../Typography';

import { colors } from '../utils';

import styled from 'styled-components';

export const StyledChip = styled(Typography).attrs({
  size: 12,
  color: 'gray2',
})`
  background-color: ${colors.gray9};
  padding: 7px 14px;
  width: fit-content;
  border-radius: 8px;
`;
