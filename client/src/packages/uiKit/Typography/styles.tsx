import styled, { css } from "styled-components";

export const StyledTypography = styled.p<{
  $size?: number;
  $color?: string;
  $weight?: 300 | 400 | 500 | 700;
  $nowrap: boolean;
  $ellipsis: boolean;
  $lineHeightMultiplier?: number;
  $maxLines?: number;
  $lines?: number;
}>`
  ${({ $size, $color, $weight, $lineHeightMultiplier }) => css`
    ${$lineHeightMultiplier
      ? css`
          line-height: ${$lineHeightMultiplier};
        `
      : ""}

    ${$size
      ? css`
          font-size: ${$size}px;
        `
      : ""}
    ${$color
      ? css`
          color: ${$color};
        `
      : ""}
      ${$weight
      ? css`
          font-weight: ${$weight};
        `
      : ""}
  `}

  ${({ $nowrap }) =>
    $nowrap &&
    css`
      white-space: nowrap;
    `}

    ${({ $ellipsis }) =>
    $ellipsis &&
    css`
      overflow: hidden;
      text-overflow: ellipsis;
    `}

    ${({ $maxLines }) =>
    $maxLines &&
    css`
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: ${$maxLines};
    `}

    ${({ $lines, $lineHeightMultiplier }) =>
    $lines &&
    css`
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: ${$lines};
      height: ${$lines * ($lineHeightMultiplier ?? 1)}em;
    `}
`;
