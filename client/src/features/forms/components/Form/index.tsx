import { ButtonsContainer } from "./ButtonsContainer";
import { Content } from "./Content";
import { Error } from "./Error";
import { StyledForm } from "./styles";

import { Title } from "./Title";

import React, { FC, PropsWithChildren, useCallback } from "react";

export interface FormProps extends PropsWithChildren {
  className?: string;
  style?: React.CSSProperties;
  autoComplete?: string;
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
}

export const Form: FC<FormProps> & {
  Title: typeof Title;
  Content: typeof Content;
  ButtonsContainer: typeof ButtonsContainer;
  Error: typeof Error;
} = (props) => {
  const { onSubmit, ...restProps } = props;

  const submitHandler: React.FormEventHandler<HTMLFormElement> = useCallback(
    (e) => {
      e.preventDefault();
      onSubmit?.(e);
    },
    [onSubmit]
  );

  return <StyledForm onSubmit={submitHandler} {...restProps} />;
};

Form.Title = Title;
Form.Content = Content;
Form.Error = Error;
Form.ButtonsContainer = ButtonsContainer;
