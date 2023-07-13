import React, { FC, PropsWithChildren, ReactNode, memo } from "react";

import {
  StyledAuthFormWrapper,
  StyledContainer,
  StyledDescription,
  StyledTitle,
} from "./styles";

export interface AuthFormWrapperProps extends PropsWithChildren {
  className?: string;
  style?: React.CSSProperties;

  title: string | ReactNode;
  description?: string;

  width?: number;
}

const _AuthFormWrapper: FC<AuthFormWrapperProps> = (props) => {
  const { title, description, width = 450, children, ...restProps } = props;

  return (
    <StyledAuthFormWrapper {...restProps}>
      <StyledContainer $width={width}>
        <StyledTitle>{title}</StyledTitle>
        <StyledDescription>{description}</StyledDescription>
        {children}
      </StyledContainer>
    </StyledAuthFormWrapper>
  );
};

export const AuthFormWrapper = memo(_AuthFormWrapper);
