import { Field } from './Field';
import { FilterButtons } from './FilterButtons';

import { StyledContent, StyledFilterModal } from './styles';

import { Modal, ModalProps } from '@packages/uiKit';
import { FC } from 'react';

export interface FilterModalProps extends Omit<ModalProps, 'title'> {}

export const FilterModal: FC<FilterModalProps> & {
  Field: typeof Field;
  Buttons: typeof FilterButtons;
  Content: typeof StyledContent;
} = (props) => {
  const { children, ...restProps } = props;

  return (
    <Modal title="Фильтры" {...restProps}>
      <StyledFilterModal>{children}</StyledFilterModal>
    </Modal>
  );
};

FilterModal.Content = StyledContent;
FilterModal.Field = Field;
FilterModal.Buttons = FilterButtons;
