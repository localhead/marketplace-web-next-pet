import { StyledInput } from './styles';

import { Field, FieldProps } from '@packages/uiKit/Field';
import React, { FC, memo, useMemo } from 'react';
import { Props as InputMaskProps } from 'react-input-mask';

export interface MaskedInputFieldProps extends Omit<FieldProps, 'children'> {
  value?: string | null;
  onChange?: (value: string | null) => void;
  inputProps: InputMaskProps;
}

const _MaskedInputField: FC<MaskedInputFieldProps> = (props) => {
  const { value, onChange, inputProps, ...restProps } = props;

  const changeHandler: React.ChangeEventHandler<HTMLInputElement> | undefined =
    useMemo(
      () =>
        onChange
          ? (e) => {
              const currentValue = e.target.value;
              onChange(currentValue ? currentValue : null);
            }
          : undefined,
      [onChange],
    );

  return (
    <Field {...restProps} isFilled={Boolean(value)}>
      <StyledInput
        value={value ?? ''}
        onChange={changeHandler}
        {...inputProps}
      />
    </Field>
  );
};

export const MaskedInputField = memo(_MaskedInputField);
