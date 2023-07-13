import {
  StyledCheckCircleIcon,
  StyledCheckContainer,
  StyledContainer,
  StyledEmptyCircle,
  StyledMultipleSelectCards,
} from './styles';

import { MultipleSelectCardsCheckPosition } from './types';

import React, { memo, ReactNode } from 'react';

export interface MultipleSelectCardsProps<
  DataItemType extends object,
  KeyType extends string | number,
> {
  className?: string;
  style?: React.CSSProperties;
  getValue: (dataItem: DataItemType) => KeyType;
  data: DataItemType[];
  values: KeyType[];
  onChange: (value: KeyType[]) => void;
  render: (dataItem: DataItemType, active: boolean) => ReactNode;
  checkPosition: MultipleSelectCardsCheckPosition;
  cols: number;
}

const _MultipleSelectCards = <
  DataItemType extends object,
  KeyType extends string | number,
>(
  props: MultipleSelectCardsProps<DataItemType, KeyType>,
) => {
  const { data, render, getValue, onChange, values, cols, ...restProps } =
    props;

  return (
    <StyledMultipleSelectCards $cols={cols} {...restProps}>
      {data.map((dataItem) => {
        const keyValue = getValue(dataItem);
        const active = values && values.includes(keyValue);

        const toggleHandler = active
          ? () => {
              onChange?.(values.filter((val) => val !== keyValue));
            }
          : () => {
              onChange?.([keyValue, ...values]);
            };

        return (
          <StyledContainer key={keyValue} $isActive={active}>
            {render(dataItem, active)}
            <StyledCheckContainer onClick={toggleHandler}>
              {active ? <StyledCheckCircleIcon /> : <StyledEmptyCircle />}
            </StyledCheckContainer>
          </StyledContainer>
        );
      })}
    </StyledMultipleSelectCards>
  );
};

export const MultipleSelectCards = memo(
  _MultipleSelectCards,
) as typeof _MultipleSelectCards;
