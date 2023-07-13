import { StyledTabFilterItem, StyledTabItem, StyledTabs } from "./styles";

import { TabsSize, TabsTabItem, TabsVariant } from "./types";

import { ModalStateWithAddition } from "@hooks/useModalState";
import React, { Dispatch, PropsWithChildren, SetStateAction } from "react";
import { Modal } from "../Modal";

export interface TabsWithFilterProps<
  ValueType extends string | number = string | number
> extends PropsWithChildren {
  className?: string;
  style?: React.CSSProperties;
  tabs: TabsTabItem<ValueType>[];
  value?: ValueType | null;
  onChange?: (value: ValueType) => void;
  onSubmit?: (data: any) => void;
  variant?: TabsVariant;
  scroll?: boolean;
  size?: TabsSize;
  modalState: ModalStateWithAddition<{}>;
  setModalActions: {
    openHandler: () => void;
    closeHandler: () => void;
    setState: Dispatch<SetStateAction<ModalStateWithAddition<{}>>>;
  };
}

export const TabsWithFilterModal = <
  ValueType extends string | number = string | number
>(
  props: TabsWithFilterProps<ValueType>
) => {
  const {
    tabs,
    children,
    scroll = false,
    size = "default",
    value,
    onChange,
    variant = "round",
    setModalActions,
    modalState,
    ...restProps
  } = props;

  // пропсы для модалки в этот компонент приходят снаружи,
  // для того чтобы был доступ к управлению модальным окном снаружи компонента

  return (
    <>
      <StyledTabs variant={variant} scroll={scroll} {...restProps}>
        <StyledTabFilterItem onClick={setModalActions.openHandler}>
          Фильтры
        </StyledTabFilterItem>
        {tabs.map((tab) => {
          const isSelected = Boolean(value) && value === tab.value;
          const onClickHandler =
            !isSelected && onChange
              ? () => {
                  onChange(tab.value);
                }
              : undefined;

          return (
            <StyledTabItem
              key={tab.value}
              onClick={onClickHandler}
              isSelected={isSelected}
              variant={variant}
              $size={size}
            >
              {tab.label}
            </StyledTabItem>
          );
        })}
      </StyledTabs>
      <Modal
        {...modalState}
        title="Фильтры"
        onClose={setModalActions.closeHandler}
      >
        {children}
      </Modal>
    </>
  );
};
