import { colors } from "../utils";
import { placeholderStyles } from "../utils/placeholderStyles";

import styled, { css } from "styled-components";

export const StyledTextAreaContainer = styled.div<{ $hasError: boolean }>`
  border: 1px solid ${colors.gray9};
  padding: 7px 14px;
  border-radius: 10px;

  ${({ $hasError }) =>
    $hasError &&
    css`
      border: 1px solid ${colors.red1};
    `}
`;

export const StyledTextArea = styled.textarea<{
  isResizable: boolean;
  error: boolean;
}>`
  border: none;
  outline: none;
  width: 100%;

  font-size: 18px;

  ::placeholder {
    ${placeholderStyles}
  }

  ${({ isResizable }) =>
    !isResizable &&
    css`
      resize: none;
    `}
`;
