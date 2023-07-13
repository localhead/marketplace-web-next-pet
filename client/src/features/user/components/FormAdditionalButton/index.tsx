import { Button } from "@packages/uiKit";
import React, { FC, ReactNode, memo } from "react";
import { StyledIcon, StyledResetPasswordTitle } from "./styles";

export interface FormAdditionalButtonProps {
  className?: string;
  style?: React.CSSProperties;

  icon: ReactNode;
  title: ReactNode;

  onSubmit: () => void;
}

const _FormAdditionalButton: FC<FormAdditionalButtonProps> = (props) => {
  const { icon, title, onSubmit, ...restProps } = props;

  return (
    <Button
      icon={<StyledIcon>{icon}</StyledIcon>}
      variant="text"
      iconPosition="left"
      size="extra-small"
      onClick={onSubmit}
    >
      <StyledResetPasswordTitle>{title}</StyledResetPasswordTitle>
    </Button>
  );
};

export const FormAdditionalButton = memo(_FormAdditionalButton);
