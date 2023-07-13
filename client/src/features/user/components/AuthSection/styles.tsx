import { SelectTabs, Typography } from '@packages/uiKit';
import styled from 'styled-components';

export const StyledAuthSection = styled.div``;
export const StyledSubtitle = styled(Typography).attrs({
  size: 16,
  color: 'gray3',
})`
  margin-bottom: 28px;
`;

export const StyledSelectTabs = styled(SelectTabs)`
  margin-bottom: 38px;
` as typeof SelectTabs;
