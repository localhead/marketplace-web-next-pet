import { Typography } from '../Typography';
import { colors } from '../utils';

import { media } from '@features/adaptive/breakpoints';
import styled from 'styled-components';

export const StyledRichCell = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const StyledIconContainer = styled.div`
  width: 66px;
  height: 66px;
  min-width: 66px;
  min-height: 66px;
  border-radius: 12px;
  background-color: ${colors.gray9};
  font-size: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledRight = styled.div``;

export const StyledTitle = styled(Typography).attrs({ size: 16, weight: 700 })`
  margin-bottom: 8px;

  font-size: 16px;

  ${media.down('tablet')} {
    font-size: 14px;
  }
`;

export const StyledDescriptionContainer = styled.div`
  white-space: pre-wrap;

  font-size: 14px;

  ${media.down('tablet')} {
    font-size: 12px;
  }
`;
