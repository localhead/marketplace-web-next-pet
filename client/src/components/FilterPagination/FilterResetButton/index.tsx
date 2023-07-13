import { StyledFilterResetButton } from './styles';

import React, { FC, memo } from 'react';

export interface FilterResetButtonProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

const _FilterResetButton: FC<FilterResetButtonProps> = (props) => {
  const { ...restProps } = props;

  return (
    <StyledFilterResetButton variant="secondary-outlined" {...restProps}>
      Сбросить
    </StyledFilterResetButton>
  );
};

export const FilterResetButton = memo(_FilterResetButton);
