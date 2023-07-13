import { StyledCostInput, StyledInputNumber } from './styles';
import { CostInputValue } from './types';

import { InputNumberProps } from '@packages/uiKit';
import React, { FC, memo } from 'react';

export interface CostInputProps {
  className?: string;
  style?: React.CSSProperties;
  value?: CostInputValue | null;
  onChange: (value: CostInputValue) => void;
}

const _CostInput: FC<CostInputProps> = (props) => {
  const { value, onChange, ...restProps } = props;

  const onChangeMin: InputNumberProps['onChange'] = onChange
    ? (minValue) => {
        onChange({ ...value, min: minValue });
      }
    : undefined;

  const onChangeMax: InputNumberProps['onChange'] = onChange
    ? (maxValue) => {
        onChange({ ...value, max: maxValue });
      }
    : undefined;

  return (
    <StyledCostInput {...restProps}>
      <StyledInputNumber
        placeholder="от"
        value={value?.min}
        onChange={onChangeMin}
      />
      <StyledInputNumber
        placeholder="до"
        value={value?.max}
        onChange={onChangeMax}
      />
    </StyledCostInput>
  );
};

export const CostInput = memo(_CostInput);
