import { colors } from '@packages/uiKit';
import { Typography } from '@packages/uiKit/Typography';
import styled, { css } from 'styled-components';

export const StyledItem = styled.div<{ $isActive: boolean }>`
  display: flex;
  align-items: center;
  gap: 11.5px;
  cursor: pointer;
  padding: 10.5px 12.5px;
  border-radius: 10px;
  border: 1px solid ${colors.gray12};

  ${({ $isActive }) =>
    $isActive
      ? css`
          background-color: ${colors.gray9};
        `
      : css`
          background-color: ${colors.white};
        `}
`;

export const StyledCircle = styled.div<{ $isActive: boolean }>`
  width: 16px;
  height: 16px;
  border-radius: 50%;

  ${({ $isActive }) =>
    $isActive
      ? css`
          background-color: ${colors.primary};
          color: ${colors.dark};
          padding: 1px;
        `
      : css`
          border: 1px solid ${colors.gray3};
        `}
`;

export const StyledLabel = styled(Typography).attrs({ size: 16, weight: 500 })`
  user-select: none;
`;
