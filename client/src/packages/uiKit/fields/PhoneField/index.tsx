import { MaskedInputField, MaskedInputFieldProps } from '../MaskedInputField';

import { FC, memo, useMemo } from 'react';

export type PhoneFieldProps = Omit<MaskedInputFieldProps, 'inputProps'> & {
  inputProps?: MaskedInputFieldProps['inputProps'];
};

const defaultInputProps: MaskedInputFieldProps['inputProps'] = {
  mask: '+7 (999) 999-99-99',
  placeholder: '+7',
  autoComplete: 'tel',
};

const _PhoneField: FC<PhoneFieldProps> = (props) => {
  const { inputProps, ...restProps } = props;

  const resInputProps: MaskedInputFieldProps['inputProps'] = useMemo(
    () => ({
      ...defaultInputProps,
      ...inputProps,
    }),
    [inputProps],
  );

  return <MaskedInputField inputProps={resInputProps} {...restProps} />;
};

export const PhoneField = memo(_PhoneField);
