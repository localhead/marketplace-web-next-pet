import { CheckCircleIcon, CircleIcon } from '@packages/icons';
import { colors } from '@packages/uiKit';
import styled, { css } from 'styled-components';

export const StyledMultipleSelectCards = styled.div<{ $cols: number }>`
  display: grid;
  ${({ $cols }) => css`
    grid-template-columns: repeat(${$cols}, 1fr);
  `}
  justify-content: space-between;
  gap: 15px;
`;

export const StyledContainer = styled.div<{
  $isActive: boolean;
}>`
  position: relative;
  width: 100%;
  background-color: white;
  border: 1px solid ${colors.gray12};
  border-radius: 18px;
  padding: 7px 7px;
  ${({ $isActive }) =>
    $isActive &&
    css`
      background-color: ${colors.gray9};
      border: 1px solid transparent;
    `}
`;

export const StyledCheckContainer = styled.div`
  bottom: 5px;
  right: 5px;
  position: absolute;
  cursor: pointer;
  display: flex;
`;

export const StyledCheckCircleIcon = styled(CheckCircleIcon)`
  font-size: 30px;
  width: 24px;
  height: 24px;
`;

export const StyledEmptyCircle = styled(CircleIcon)`
  font-size: 30px;
  color: ${colors.gray3};
  width: 24px;
  height: 24px;
`;
