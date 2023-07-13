import { media } from '@features/adaptive/breakpoints';
import { Typography } from '@packages/uiKit/Typography';
import { colors } from '@packages/uiKit/utils';
import styled, { css } from 'styled-components';

export const StyledItem = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-areas:
    'number number'
    'title title'
    'icon line'
    'desc desc';

  ${media.down('desktop')} {
    grid-template-columns: auto 1fr auto;
    grid-template-areas:
      'icon title number'
      '. desc desc';
  }
`;

export const StyledNumber = styled(Typography).attrs({
  size: 22,
  color: 'gray3',
})`
  grid-area: number;
  margin-bottom: 16px;

  ${media.down('desktop')} {
    margin-left: 20px;
    display: flex;
    align-items: flex-end;

    margin-bottom: 26px;
  }
`;

export const StyledTitleContainer = styled.div`
  grid-area: title;
  margin-bottom: 26px;
  display: flex;
  align-items: center;
`;

export const StyledTitle = styled(Typography).attrs({
  size: 22,
  weight: 700,
  maxLines: 2,
  ellipsis: true,
})`
  min-height: 50px;

  ${media.down('desktop')} {
    min-height: auto;
  }
`;

export const StyledIconContainer = styled.div`
  grid-area: icon;

  width: 54px;
  height: 54px;
  min-width: 54px;
  min-height: 54px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  border-radius: 18px;
  border: 2px solid ${colors.primary};

  margin-right: 15px;
  margin-bottom: 29px;
`;

export const StyledLine = styled.div<{ $isLast: boolean }>`
  grid-area: line;
  margin: 25.5px 0;

  height: 2px;
  flex: 1;
  background: ${colors.primary};

  ${({ $isLast }) =>
    $isLast &&
    css`
      background: linear-gradient(
        90deg,
        ${colors.primary} 0%,
        rgba(255, 217, 120, 0) 100%
      );
    `}

  ${media.down('desktop')} {
    display: none;
  }
`;

export const StyledDescription = styled(Typography).attrs({
  size: 14,
  color: 'gray3',
})`
  grid-area: desc;
`;
