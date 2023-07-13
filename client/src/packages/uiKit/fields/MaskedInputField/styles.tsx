import { colors } from '@packages/uiKit/utils';
import InputMask from 'react-input-mask';
import styled from 'styled-components';

export const StyledInput = styled(InputMask)`
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
