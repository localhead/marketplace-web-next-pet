import { MaskedInputField, MaskedInputFieldProps } from "../MaskedInputField";

import { forwardRef, memo, useMemo } from "react";

export type PhoneFieldProps = Omit<MaskedInputFieldProps, "inputProps"> & {
  inputProps?: MaskedInputFieldProps["inputProps"];

  error?: string;
};

const defaultInputProps: MaskedInputFieldProps["inputProps"] = {
  mask: "+7 (999) 999-99-99",
  placeholder: "+7",
  autoComplete: "tel",
};

const _PhoneField = forwardRef<HTMLDivElement, PhoneFieldProps>(
  (props, ref) => {
    const { inputProps, ...restProps } = props;

    const resInputProps: MaskedInputFieldProps["inputProps"] = useMemo(
      () => ({
        ...defaultInputProps,
        ...inputProps,
      }),
      [inputProps]
    );

    return <MaskedInputField inputProps={resInputProps} {...restProps} />;
  }
);

_PhoneField.displayName = "PhoneField";

export const PhoneField = memo(_PhoneField);
