import { PlusIcon } from '@packages/icons';
import { colors } from '@packages/uiKit';
import styled from 'styled-components';

export const StyledExpandableOptions = styled.div``;

export const StyledExtendButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 0px;
  font-size: 10px;
  font-weight: 400;
  color: ${colors.gray3};
  margin-top: 14px;
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const StyledTitle = styled.div`
  margin-top: 2px;
`;

export const StyledPlusIcon = styled(PlusIcon)`
  font-size: 13px;
`;
