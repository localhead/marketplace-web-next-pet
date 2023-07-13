import { Typography } from '../Typography';

import { colors } from '../utils';

import styled, { css } from 'styled-components';

export const StyledField = styled.div<{ $hasError: boolean }>`
  display: flex;
  border-radius: 10px;
  border: 1px solid ${colors.gray12};
  min-height: 56px;

  ${({ $hasError }) =>
    $hasError &&
    css`
      border-color: ${colors.red3};
    `}
`;

export const StyledMiddleContainer = styled.div`
  flex: 1;
  min-width: 0;
  padding: 7px 14px;
  display: flex;
  flex-direction: column;
`;

export const StyledLeftContainer = styled.div`
  align-self: center;
`;
export const StyledRightContainer = styled.div`
  align-self: center;
  padding: 0 20px;
  font-size: 20px;
  display: flex;
  align-items: center;
`;

export const StyledLabel = styled(Typography).attrs({
  size: 12,
  color: 'dark',
  nowrap: true,
  ellipsis: true,
})<{ $isFilled?: boolean }>`
  margin-top: 2px;
  margin-bottom: 4px;

  ${({ $isFilled }) =>
    $isFilled &&
    css`
      color: ${colors.gray3};
    `}
`;

export const StyledError = styled(Typography).attrs({
  size: 12,
  color: 'red1',
  nowrap: true,
  ellipsis: true,
})<{ $isFilled?: boolean }>`
  margin-top: 2px;
  margin-bottom: 4px;
`;

export const StyledControlContainter = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`;
