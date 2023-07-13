import { Typography } from '@packages/uiKit/Typography';
import { colors } from '@packages/uiKit/utils';
import styled, { css } from 'styled-components';

export const StyledItem = styled.div<{ $isActive: boolean }>`
  display: flex;
  gap: 9px;

  width: fit-content;

  ${({ $isActive }) =>
    !$isActive &&
    css`
      cursor: pointer;
    `}
`;

export const StyledCircle = styled.div<{ $isActive: boolean }>`
  width: 16px;
  height: 16px;
  border-radius: 50%;

  ${({ $isActive }) =>
    $isActive
      ? css`
          background-color: ${colors.dark};
          border: 4px solid ${colors.primary};
        `
      : css`
          border: 1px solid ${colors.gray3};
        `}
`;

export const StyledLabel = styled(Typography).attrs({ size: 12 })`
  user-select: none;
`;
