import { StyledIconButton } from './styles';

import { InputField, InputFieldProps } from '../InputField';

import { EyeIcon, EyeSlashIcon } from '@packages/icons';
import { FC, memo, useMemo, useState } from 'react';

export interface PasswordFieldProps extends Omit<InputFieldProps, 'right'> {}

const _PasswordField: FC<PasswordFieldProps> = (props) => {
  const { inputProps, ...restProps } = props;

  const [isShowPass, setIsShowPass] = useState(false);

  const inputPropsWithPasswordType: InputFieldProps['inputProps'] =
    useMemo(() => {
      if (isShowPass) {
        return {
          type: 'text',
          ...inputProps,
        };
      }

      return {
        type: 'password',
        ...inputProps,
      };
    }, [inputProps, isShowPass]);

  const rightContent = useMemo(() => {
    const handleSwitch = () => setIsShowPass((prev) => !prev);

    if (isShowPass) {
      return (
        <StyledIconButton onClick={handleSwitch}>
          <EyeIcon />
        </StyledIconButton>
      );
    }

    return (
      <StyledIconButton onClick={handleSwitch}>
        <EyeSlashIcon />
      </StyledIconButton>
    );
  }, [isShowPass]);

  return (
    <InputField
      inputProps={inputPropsWithPasswordType}
      right={rightContent}
      {...restProps}
    />
  );
};

export const PasswordField = memo(_PasswordField);
