import { StyledEyeIcon, StyledEyeSlashIcon, StyledIconButton } from "./styles";

import { InputField, InputFieldProps } from "../InputField";

import { UnlockIcon } from "@packages/icons";
import { FC, memo, useMemo, useState } from "react";

export interface PasswordFieldProps extends Omit<InputFieldProps, "right"> {
  passwordFieldVariant?: "login" | "restore";
}

const _PasswordField: FC<PasswordFieldProps> = (props) => {
  const { inputProps, passwordFieldVariant = "restore", ...restProps } = props;

  const [isShowPass, setIsShowPass] = useState(false);

  const inputPropsWithPasswordType: InputFieldProps["inputProps"] =
    useMemo(() => {
      if (isShowPass) {
        return {
          type: "text",
          ...inputProps,
        };
      }

      return {
        type: "password",
        ...inputProps,
      };
    }, [inputProps, isShowPass]);

  const rightContent = useMemo(() => {
    const handleSwitch = () => {
      setIsShowPass((prev) => !prev);
    };

    if (isShowPass) {
      return (
        <>
          {passwordFieldVariant === "login" ? (
            <UnlockIcon />
          ) : (
            <StyledIconButton onClick={handleSwitch}>
              <StyledEyeIcon />
            </StyledIconButton>
          )}
        </>
      );
    }

    return (
      <>
        {passwordFieldVariant === "login" ? (
          <UnlockIcon />
        ) : (
          <StyledIconButton onClick={handleSwitch}>
            <StyledEyeSlashIcon />
          </StyledIconButton>
        )}
      </>
    );
  }, [isShowPass, passwordFieldVariant]);

  return (
    <InputField
      inputProps={inputPropsWithPasswordType}
      right={rightContent}
      {...restProps}
    />
  );
};

export const PasswordField = memo(_PasswordField);
