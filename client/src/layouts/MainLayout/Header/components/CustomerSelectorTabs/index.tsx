import { FC, useCallback, useState } from "react";
import {
  StyledCustomerSelectorTabItem,
  StyledCustomerSelectorTabs,
} from "./styles";

export interface CustomerSelectorTabsProps {
  className?: string;
  style?: React.CSSProperties;
}

type CustomerItem = {
  value: number;
  label: string;
};

const mockCustomerItems: CustomerItem[] = [
  {
    value: 0,
    label: "Для него",
  },
  {
    value: 1,
    label: "Для нее",
  },
  {
    value: 2,
    label: "Детям",
  },
];

export const CustomerSelectorTabs: FC<CustomerSelectorTabsProps> = (props) => {
  const { ...restProps } = props;

  const [isCustomerTabSelected, setCustomerTabSelected] = useState(
    mockCustomerItems[0].value
  );

  const tabClickHandler = useCallback((item: CustomerItem) => {
    setCustomerTabSelected(item.value);
  }, []);

  return (
    <StyledCustomerSelectorTabs>
      {mockCustomerItems.map((item) => {
        const isSelected = isCustomerTabSelected === item.value;

        return (
          <StyledCustomerSelectorTabItem
            key={item.value}
            $isSelected={isSelected}
            onClick={() => {
              tabClickHandler(item);
            }}
          >
            {item.label}
          </StyledCustomerSelectorTabItem>
        );
      })}
    </StyledCustomerSelectorTabs>
  );
};
