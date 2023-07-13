import { Typography } from '@packages/uiKit';
import styled from 'styled-components';

export const StyledContentContainer = styled.div`
  padding: 13px 18px 13px 40px;
`;

export const StyledTitle = styled(Typography).attrs({
  size: 16,
  weight: 500,
})`
  margin-bottom: 3px;
`;

export const StyledDescription = styled(Typography).attrs({
  size: 12,
  color: 'gray3',
})``;
