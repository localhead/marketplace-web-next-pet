import { StyledFilterField, StyledLabel } from './styles';

import React, { FC, memo, PropsWithChildren } from 'react';

export interface FilterFieldProps extends PropsWithChildren {
  className?: string;
  style?: React.CSSProperties;

  label?: string;
}

const _FilterField: FC<FilterFieldProps> = (props) => {
  const { label, children, ...restProps } = props;

  return (
    <StyledFilterField {...restProps}>
      {label ? <StyledLabel>{label}</StyledLabel> : null}
      {children}
    </StyledFilterField>
  );
};

export const FilterField = memo(_FilterField);
