import { StyledPropsTable, StyledValue } from "./styles";

import { MockTableStockItem } from "@features/stocks/pages/StockDetailPage/InnerContentSection/DividendsCalendarSection/mock";
import { toCurrency, toPercent } from "@utils/formatToLocaleString";
import React, { FC, Fragment, memo } from "react";

export interface PropsTableProps {
  className?: string;
  style?: React.CSSProperties;

  items: MockTableStockItem[];
}

const _PropsTable: FC<PropsTableProps> = (props) => {
  const { items, ...restProps } = props;

  return (
    <StyledPropsTable {...restProps}>
      {items.map((item, index) => {
        return (
          <Fragment key={index}>
            <StyledValue $variant="default">{item.dateInclude}</StyledValue>
            <StyledValue $variant="default">{item.dateForm}</StyledValue>
            <StyledValue $variant="bold">
              {toPercent(item.dividendIncome, 2)}
            </StyledValue>
            <StyledValue $variant="bold">
              {toCurrency(item.dividendPrice, {
                currency: "RUB",
                showPennies: true,
              })}
            </StyledValue>
          </Fragment>
        );
      })}
    </StyledPropsTable>
  );
};

export const PropsTable = memo(_PropsTable);
