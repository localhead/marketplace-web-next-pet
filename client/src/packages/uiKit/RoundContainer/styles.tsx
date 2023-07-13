import { AppColor, colors } from '../utils';

import styled, { css } from 'styled-components';

export type StyledRoundContainerProps = {
  $fill?: AppColor;
  $borderRadius?: number;
  $borderColor?: AppColor;
};

export const StyledRoundContainer = styled.div<StyledRoundContainerProps>`
  ${({ $fill }) =>
    $fill &&
    css`
      background-color: ${colors[$fill]};
    `}

  ${({ $borderColor }) =>
    $borderColor &&
    css`
      border: 1px solid ${colors[$borderColor]};
    `}

    ${({ $borderRadius }) =>
    css`
      border-radius: ${$borderRadius ?? 18}px;
    `}
`;
