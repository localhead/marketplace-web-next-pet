import { Tag } from '@packages/uiKit/Tag';
import { colors } from '@packages/uiKit/utils';
import styled, { css } from 'styled-components';

export const StyledLetterItem = styled(Tag)<{
  $isActive: boolean;
}>`
  text-transform: uppercase;
  padding: 3px 11px;

  :hover {
    background-color: ${colors.gray9};
  }

  ${({ $isActive }) =>
    $isActive
      ? css`
          cursor: default;
          background-color: ${colors.gray9};
        `
      : css`
          cursor: pointer;
        `}
`;
