import { GridAdaptiveParam } from "./types";

import { media } from "@features/adaptive/breakpoints";
import styled, { css } from "styled-components";

const getStylesAdaptiveParam = <T,>(
  param: GridAdaptiveParam<T>,
  getString: (value: T) => string
) => {
  if (param instanceof Object) {
    let resString = getString(param.default);
    const { default: _, ...withNoDefault } = param;

    Object.entries(withNoDefault).forEach(([key, value]) => {
      resString += `
        ${media.down(key as keyof typeof withNoDefault)}{
          ${getString(value)}
        }
      `;
    });

    return resString;
  }

  return getString(param);
};

export const StyledGridAdaptive = styled.div<{
  $cols: GridAdaptiveParam<number>;
  $columnGap?: GridAdaptiveParam<number>;
  $rowGap?: GridAdaptiveParam<number>;
}>`
  > * {
    min-width: 0;
  }
  ${({ $cols, $columnGap, $rowGap }) => css`
    display: grid;

    ${getStylesAdaptiveParam(
      $cols,
      (cols) => `grid-template-columns: repeat(${cols}, 1fr);`
    )}

    ${$columnGap &&
    getStylesAdaptiveParam(
      $columnGap,
      (columnGap) => `column-gap: ${columnGap}px;`
    )}

${$rowGap &&
    getStylesAdaptiveParam($rowGap, (rowGap) => `row-gap: ${rowGap}px;`)}
  `}
`;
