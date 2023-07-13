import React, { FC, memo, useMemo } from "react";

import { InnerSidebarCard } from "@features/profile/components/ProfileSidebar/mock/types";
import {
  StyledBarGraph,
  StyledChartDynamicColumn,
  StyledChartItemContainer,
  StyledMonthTitle,
} from "./styles";

export interface BarGraphProps {
  className?: string;
  style?: React.CSSProperties;

  onChange?: (arg: number) => void;
  data: InnerSidebarCard;
  value: number;
}

const chartsExpensesAmounts = (data: InnerSidebarCard) => {
  if (!data.expenses) return [];
  return data?.expenses.map((item) => {
    return item.amount;
  });
};

const calcLargestExpenseAmount = (data: InnerSidebarCard) => {
  if (!data.expenses) return 1;

  const res = chartsExpensesAmounts(data);

  return Math.max(...res);
};

const _BarGraph: FC<BarGraphProps> = (props) => {
  const { data, value, onChange } = props;

  const largestExpenseAmount = data ? calcLargestExpenseAmount(data) : 1;

  const chartsExpenseHeightPercent = useMemo(() => {
    return chartsExpensesAmounts(data).map((item) => {
      return Math.round((item / largestExpenseAmount) * 100);
    });
  }, [data, largestExpenseAmount]);

  const combinedData = data.expenses?.map((item, index) => {
    return {
      ...item,
      percent: chartsExpenseHeightPercent[index],
    };
  });

  return (
    <StyledBarGraph>
      {combinedData?.map((item, index) => {
        const isSelected = index === value;

        const chartHeight = Math.round(
          (item.amount / largestExpenseAmount) * 100
        );

        const onClickHandler =
          !isSelected && onChange
            ? () => {
                onChange(index);
              }
            : undefined;

        return (
          <StyledChartItemContainer key={index} onClick={onClickHandler}>
            <StyledMonthTitle $isSelected={isSelected}>
              {item.date.slice(0, 3)}
            </StyledMonthTitle>
            <StyledChartDynamicColumn
              $height={item.percent}
              $isSelected={isSelected}
            />
          </StyledChartItemContainer>
        );
      })}
    </StyledBarGraph>
  );
};

export const BarGraph = memo(_BarGraph);
