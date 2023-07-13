import { placeholderStyles } from '../utils/placeholderStyles';

import styled, { css } from 'styled-components';

export const StyledTextArea = styled.textarea<{
  isResizable: boolean;
  error: boolean;
}>`
  border: none;
  outline: none;
  ::placeholder {
    ${placeholderStyles}
  }

  ${({ isResizable }) =>
    !isResizable &&
    css`
      resize: none;
    `}
`;
