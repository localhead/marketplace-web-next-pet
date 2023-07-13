import {
  StyledContentContainer,
  StyledDescription,
  StyledTitle,
} from "./styles";
import { SimpleSelectCardsOption } from "./types";

import { SelectCards, SelectCardsProps } from "@packages/uiKit/SelectCards";
import { memo } from "react";

export interface SimpleSelectCardsProps<TValue extends string | number>
  extends Omit<
    SelectCardsProps<SimpleSelectCardsOption<TValue>, TValue>,
    "checkPosition" | "getValue" | "render" | "size"
  > {}

const getValue = <TValue extends string | number>(
  item: SimpleSelectCardsOption<TValue>
) => item.value;

const render = <TValue extends string | number>(
  dataItem: SimpleSelectCardsOption<TValue>
) => {
  return (
    <StyledContentContainer>
      <StyledTitle>{dataItem.title}</StyledTitle>
      <StyledDescription>{dataItem.description}</StyledDescription>
    </StyledContentContainer>
  );
};

const _SimpleSelectCards = <TValue extends string | number>(
  props: SimpleSelectCardsProps<TValue>
) => {
  const { ...restProps } = props;

  return (
    <SelectCards
      checkPosition="left"
      getValue={getValue}
      render={render}
      size="small"
      {...restProps}
    />
  );
};

export const SimpleSelectCards = memo(
  _SimpleSelectCards
) as typeof _SimpleSelectCards;
