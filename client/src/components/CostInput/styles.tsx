import { colors, InputNumber } from '@packages/uiKit';
import styled from 'styled-components';

export const StyledCostInput = styled.div`
  display: flex;
  gap: 15px;
`;

export const StyledInputNumber = styled(InputNumber).attrs({
  size: 'small',
})`
  flex: 1;
  background-color: ${colors.gray9};
  border-radius: 12px;
  border: none;
  min-width: 0;
  padding: 7px;
`;
