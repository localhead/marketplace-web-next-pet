import { Typography } from '../Typography';
import { colors } from '../utils';

import styled, { css } from 'styled-components';

export const StyledDetail = styled.div`
  border-top: 1px solid ${colors.gray13};
  border-bottom: 1px solid ${colors.gray13};
`;

export const StyledDetailHeader = styled.div`
  padding: 15px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledTitle = styled(Typography).attrs({
  size: 18,
  weight: 700,
})<{ $isOpen: boolean }>`
  cursor: pointer;
  user-select: none;
  :hover {
    text-decoration: underline;
    color: ${colors.blueGray2};
  }
  ${({ $isOpen }) =>
    $isOpen
      ? css`
          color: ${colors.blueGray2};
        `
      : css`
          color: ${colors.dark};
        `}
`;

export const StyledContent = styled.div`
  padding-bottom: 18px;
`;
