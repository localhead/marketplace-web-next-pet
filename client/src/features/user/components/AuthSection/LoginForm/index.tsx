import { useLoginForm, UseLoginFormParams } from "./hooks";
import { StyledLoginForm } from "./styles";

import { RestorePasswordRequestModal } from "../RestorePasswordModal";

import { Form } from "@features/forms/components/Form";
import { InputFieldAdapter } from "@features/forms/components/InputFieldAdapter";
import { PasswordFieldAdapter } from "@features/forms/components/PasswordFieldAdapter";
import { useAppDispatch } from "@features/store";
import { login } from "@features/user/store";
import { useModalState } from "@hooks/useModalState";
import { EnvelopeSimpleIcon } from "@packages/icons";
import { Button } from "@packages/uiKit";
import { FetchBaseQueryError } from "@reduxjs/toolkit/dist/query";
import { Col, Row } from "antd";
import React, { FC, memo, useCallback } from "react";

export interface LoginFormProps {
  className?: string;
  style?: React.CSSProperties;

  onSubmit?: () => void;
}
const loginInputProps = {
  autoComplete: "username",
};

const passwordInputProps = {
  autoComplete: "current-password",
};

const _LoginForm: FC<LoginFormProps> = (props) => {
  const { onSubmit, ...restProps } = props;

  const dispatch = useAppDispatch();

  const submitHandler: UseLoginFormParams["onSubmit"] = useCallback(
    async (data) => {
      try {
        await dispatch(login(data)).unwrap();
      } catch (e) {
        if ((e as FetchBaseQueryError).status === 403) {
          throw new Error("Неверные учетные данные");
        }
        throw new Error("Неизвестная ошибка");
      }

      onSubmit?.();
    },
    [dispatch, onSubmit]
  );

  const { control, handleSubmit, formError } = useLoginForm({
    onSubmit: submitHandler,
  });

  const [passModalState, passModalStateActions] = useModalState();

  return (
    <StyledLoginForm {...restProps}>
      <Form.Content>
        <Row gutter={[15, 15]}>
          <Col span={24}>
            <InputFieldAdapter
              control={control}
              name="login"
              label="Электронная почта"
              placeholder="name@mail.com"
              right={<EnvelopeSimpleIcon />}
              inputProps={loginInputProps}
            />
          </Col>
          <Col span={24}>
            <PasswordFieldAdapter
              control={control}
              name="password"
              label="Ваш пароль"
              placeholder="·  ·  ·  ·  ·  ·  ·  ·  ·  ·"
              inputProps={passwordInputProps}
            />
          </Col>
        </Row>
      </Form.Content>

      <Form.Error error={formError} />

      <Form.ButtonsContainer>
        <Row gutter={[24, 12]} align="middle">
          <Col>
            <Button variant="primary" size="extralarge" onClick={handleSubmit}>
              Войти
            </Button>
          </Col>
          <Col>
            <Button variant="text" onClick={passModalStateActions.openHandler}>
              Восстановить пароль
            </Button>
          </Col>
        </Row>
      </Form.ButtonsContainer>

      <RestorePasswordRequestModal
        {...passModalState}
        onClose={passModalStateActions.closeHandler}
      />
    </StyledLoginForm>
  );
};

export const LoginForm = memo(_LoginForm);
