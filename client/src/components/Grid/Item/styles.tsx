import { GridBorder } from '../types';

import { colors } from '@packages/uiKit';
import styled, { css } from 'styled-components';

export const StyledItem = styled.div<{
  $isFirstRow: boolean;
  $border: GridBorder;
}>`
  padding: 11px 0;

  ${({ $border, $isFirstRow }) =>
    $border === 'both'
      ? css`
          border-bottom: 1px solid ${colors.gray14};

          ${$isFirstRow
            ? css`
                border-top: 1px solid ${colors.gray14};
              `
            : ''}
        `
      : $border === 'bottom'
      ? css`
          border-bottom: 1px solid ${colors.gray14};
        `
      : ''}
`;
