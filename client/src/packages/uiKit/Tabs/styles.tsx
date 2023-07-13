import { TabsVariant } from './types';

import { Typography } from '../Typography';

import { media } from '@features/adaptive/breakpoints';
import { colors } from '@packages/uiKit/utils/colors';
import styled, { css } from 'styled-components';

export const StyledTabs = styled.div<{ scroll: boolean; variant: TabsVariant }>`
  display: flex;
  flex-wrap: wrap;

  margin-bottom: 28px;

  ${({ scroll }) =>
    scroll &&
    css`
      flex-wrap: nowrap;
      gap: 10px;
      overflow-x: auto;
      padding-bottom: 20px;
      margin-bottom: 10px;
    `}

  ${({ variant }) =>
    variant === 'round' &&
    css`
      gap: 10px;
    `}
`;

export const StyledTabItem = styled(Typography)<{
  isSelected: boolean;
  variant: TabsVariant;
}>`
  transition: 0.3s ease;

  ${({ isSelected }) =>
    !isSelected &&
    css`
      cursor: pointer;
    `}

  ${(props) => getDynamicStyles(props)}
`;

const getDynamicStyles = (props: {
  isSelected: boolean;
  variant: TabsVariant;
}) => {
  const { isSelected, variant } = props;

  switch (variant) {
    case 'round': {
      return css`
        border-radius: 12px;
        border-width: 1px;
        border-style: solid;
        font-size: 12px;
        font-weight: 500;
        padding: 6px 21px;
        ${media.down('desktop')} {
          white-space: nowrap;
        }
        ${isSelected
          ? css`
              color: ${colors.white};
              background-color: ${colors.dark};
              border-color: ${colors.dark};
            `
          : css`
              color: ${colors.dark};
              background-color: transparent;
              border-color: ${colors.gray7};
            `}
      `;
    }
  }
};
