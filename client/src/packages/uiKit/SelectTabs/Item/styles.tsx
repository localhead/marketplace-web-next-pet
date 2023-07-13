import { Typography } from '@packages/uiKit/Typography';
import { colors } from '@packages/uiKit/utils';
import styled, { css } from 'styled-components';

export const StyledItem = styled.div<{ $isActive: boolean }>`
  padding: 8px 22px 8px 9px;
  display: flex;
  align-items: center;
  gap: 22px;

  border-radius: 14px;
  border-width: 1px;
  border-style: solid;
  transition: 0.3s ease;

  ${({ $isActive }) =>
    $isActive
      ? css`
          background-color: ${colors.gray9};
          border-color: ${colors.gray9};
          color: ${colors.dark};
          cursor: default;
        `
      : css`
          background-color: ${colors.white};
          border-color: ${colors.gray7};
          color: ${colors.gray3};
          cursor: pointer;
        `}
`;

export const StyledLabel = styled(Typography).attrs({ size: 12 })``;
