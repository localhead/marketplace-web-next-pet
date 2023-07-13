import { StyledField, StyledLabel } from './styles';

import React, { FC, memo, PropsWithChildren } from 'react';

export interface FieldProps extends PropsWithChildren {
  className?: string;
  style?: React.CSSProperties;
  label?: string;
}

const _Field: FC<FieldProps> = (props) => {
  const { label, children, ...restProps } = props;

  return (
    <StyledField {...restProps}>
      {label ? <StyledLabel>{label}</StyledLabel> : null}
      {children}
    </StyledField>
  );
};

export const Field = memo(_Field);
