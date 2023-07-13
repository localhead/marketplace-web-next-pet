import {
  StyledCheckCircleIcon,
  StyledCheckContainer,
  StyledContainer,
  StyledEmptyCircle,
  StyledError,
  StyledSelectCards,
} from "./styles";

import { SelectCardsCheckPosition, SelectCardsSize } from "./types";

import { CardSkeleton } from "@packages/uiKit/SelectCards/CardSkeleton";
import React, { memo, ReactNode } from "react";

export interface SelectCardsProps<
  DataItemType extends object,
  KeyType extends string | number
> {
  className?: string;
  style?: React.CSSProperties;
  getValue: (dataItem: DataItemType) => KeyType;
  data: DataItemType[];
  value: KeyType | null;
  onChange: (value: KeyType | null) => void;
  render: (dataItem: DataItemType, active: boolean) => ReactNode;
  checkPosition: SelectCardsCheckPosition;
  cols: number;
  size?: SelectCardsSize;
  error?: string;
  isLoading?: boolean;
}

const _SelectCards = <
  DeliveryType extends object,
  KeyType extends string | number
>(
  props: SelectCardsProps<DeliveryType, KeyType>
) => {
  const {
    data,
    render,
    getValue,
    onChange,
    value,
    checkPosition,
    cols,
    size = "medium",
    error,
    isLoading,
    ...restProps
  } = props;

  return (
    <StyledSelectCards $cols={cols} {...restProps}>
      {isLoading
        ? Array.from({ length: cols }).map((_, index) => {
            return (
              <CardSkeleton key={index + "skeleton"} isLoading={isLoading} />
            );
          })
        : data.map((dataItem) => {
            const keyValue = getValue(dataItem);
            const active = value === keyValue;

            const toggleHandler = active
              ? () => {
                  onChange?.(null);
                }
              : () => {
                  onChange?.(keyValue);
                };

            return (
              <StyledContainer key={keyValue} $isActive={active} $size={size}>
                {render(dataItem, active)}
                <StyledCheckContainer
                  onClick={toggleHandler}
                  $checkPosition={checkPosition}
                >
                  {active ? <StyledCheckCircleIcon /> : <StyledEmptyCircle />}
                </StyledCheckContainer>
              </StyledContainer>
            );
          })}

      {error ? <StyledError>{error}</StyledError> : null}
    </StyledSelectCards>
  );
};

export const SelectCards = memo(_SelectCards) as typeof _SelectCards;
