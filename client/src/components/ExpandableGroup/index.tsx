import {
  StyledExpandableOptions,
  StyledExtendButton,
  StyledPlusIcon,
  StyledTitle,
} from './styles';

import { MinusIcon } from '@packages/icons';
import React, { memo, ReactNode, useState } from 'react';

export interface ExpandableOptionsProps<TOption> {
  className?: string;
  style?: React.CSSProperties;

  options: TOption[];
  maxLength: number;

  render: (options: TOption[]) => ReactNode;
}

const _ExpandableGroup = <TOption,>(props: ExpandableOptionsProps<TOption>) => {
  const { render, options, maxLength, ...restProps } = props;

  const [isExpanded, setIsExpanded] = useState(false);

  const isOverflow = options.length > maxLength;

  const resOptions =
    isExpanded && isOverflow ? options : options.slice(0, maxLength);

  const clickHandler = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <StyledExpandableOptions {...restProps}>
      {render(resOptions)}
      {isOverflow ? (
        isExpanded ? (
          <StyledExtendButton onClick={clickHandler}>
            <MinusIcon />
            <StyledTitle>Показать меньше</StyledTitle>
          </StyledExtendButton>
        ) : (
          <StyledExtendButton onClick={clickHandler}>
            <StyledPlusIcon />
            <StyledTitle>Показать больше</StyledTitle>
          </StyledExtendButton>
        )
      ) : null}
    </StyledExpandableOptions>
  );
};

export const ExpandableGroup = memo(
  _ExpandableGroup,
) as typeof _ExpandableGroup;
