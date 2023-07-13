import { InfoCartVariant } from './types';

import { media } from '@features/adaptive/breakpoints';
import { Typography } from '@packages/uiKit/Typography';
import { colors } from '@packages/uiKit/utils';
import styled, { css } from 'styled-components';

export const StyledIconContainer = styled.div<{
  $variant: InfoCartVariant;
}>`
  border-radius: 10px;
  color: ${colors.dark};
  font-size: 32px;
  align-self: flex-start;
  width: 60px;
  height: 60px;
  min-width: 60px;
  min-height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ $variant }) =>
    $variant === 'primary'
      ? css`
          background-color: ${colors.primary};
        `
      : $variant === 'secondary'
      ? css`
          background-color: ${colors.gray9};
        `
      : null}
`;

export const StyledMain = styled.div`
  min-width: 0;
  margin-bottom: 20px;
  ${media.down('desktop')} {
    margin-bottom: 10px;
  }
`;

export const StyledSegment = styled.div`
  display: flex;
  gap: 25px;
  padding: 9px;

  :first-child {
    ${StyledMain} {
      margin-top: 13px;
    }
  }
`;

export const StyledTitle = styled(Typography).attrs({ size: 22, weight: 700 })`
  margin-bottom: 15px;
`;

export const StyledContent = styled.div``;
