import { StyledFilterButtons } from './styles';

import { Button } from '@packages/uiKit';
import React, { FC, memo } from 'react';

export interface FilterButtonsProps {
  className?: string;
  style?: React.CSSProperties;

  onSubmit?: () => void;
  onReset?: () => void;
}

const _FilterButtons: FC<FilterButtonsProps> = (props) => {
  const { onSubmit, onReset, ...restProps } = props;

  return (
    <StyledFilterButtons {...restProps}>
      <Button size="extralarge" onClick={onSubmit}>
        Применить фильтры
      </Button>
      <Button size="medium" variant="secondary-outlined" onClick={onReset}>
        Сбросить фильтры
      </Button>
    </StyledFilterButtons>
  );
};

export const FilterButtons = memo(_FilterButtons);
