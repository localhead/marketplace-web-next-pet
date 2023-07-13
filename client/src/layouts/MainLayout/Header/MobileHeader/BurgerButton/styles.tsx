import { colors, IconButton } from '@packages/uiKit';
import styled, { css } from 'styled-components';

export const StyledBurgerButton = styled(IconButton)<{ $isOpen: boolean }>`
  border-radius: 18px;

  ${({ $isOpen }) =>
    $isOpen &&
    css`
      background-color: ${colors.dark};
      border-color: ${colors.dark};
      color: ${colors.white};

      :hover {
        background-color: ${colors.dark};
        border-color: ${colors.dark};
        color: ${colors.white};
      }
    `}
`;
