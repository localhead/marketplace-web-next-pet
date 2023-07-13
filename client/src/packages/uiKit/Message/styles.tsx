import { MessageType } from './types';

import { Typography } from '../Typography';

import { colors } from '../utils';

import styled, { css } from 'styled-components';

const typeMap: Record<MessageType, { bg: string; color: string }> = {
  success: {
    bg: colors.green2,
    color: colors.white,
  },
  error: {
    bg: colors.danger,
    color: colors.white,
  },
};

export const StyledMessage = styled(Typography).attrs({
  size: 12,
  weight: 500,
})<{ $type: MessageType }>`
  padding: 7px 15px;
  border-radius: 12px;

  ${({ $type }) => {
    const { bg, color } = typeMap[$type];
    return css`
      background-color: ${bg};
      color: ${color};
    `;
  }}
`;
