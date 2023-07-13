import { colors } from '@packages/uiKit/utils';
import styled from 'styled-components';

export const StyledInput = styled.input`
  width: 100%;
  border: none;
  font-size: 14px;
  line-height: 120%;
  padding: 0;
  :focus {
    border: none;
    outline: none;
  }

  ::placeholder {
    color: ${colors.gray3};
  }
`;
