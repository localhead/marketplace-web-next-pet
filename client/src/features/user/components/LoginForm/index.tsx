import React, { FC, memo, useCallback } from "react";

import { Space } from "@components/Space";
import { Form } from "@features/forms/components/Form";
import { InputFieldAdapter } from "@features/forms/components/InputFieldAdapter";
import { PasswordFieldAdapter } from "@features/forms/components/PasswordFieldAdapter";
import { paths } from "@features/routering/paths";
import { useAppDispatch } from "@features/store";
import { login } from "@features/user/store/thunks";
import { KeyIcon, UserIcon } from "@packages/icons";
import { Button } from "@packages/uiKit/Button";
import { FetchBaseQueryError } from "@reduxjs/toolkit/dist/query";
import { Col, Row } from "antd";
import { useRouter } from "next/router";
import { FormAdditionalButton } from "../FormAdditionalButton";
import { UseLoginFormParams, useLoginForm } from "./hooks";
import { StyledLoginForm } from "./styles";

export interface LoginFormProps {
  className?: string;
  style?: React.CSSProperties;

  onSubmit?: () => void;
}

const _LoginForm: FC<LoginFormProps> = (props) => {
  const { onSubmit, ...restProps } = props;

  const router = useRouter();

  const dispatch = useAppDispatch();

  const submitHandler: UseLoginFormParams["onSubmit"] = useCallback(
    async (data) => {
      try {
        await dispatch(login(data)).unwrap();
      } catch (e) {
        if ((e as FetchBaseQueryError).status === 401) {
          throw new Error(
            "Неверная электронная почта или пароль. Попробуйте снова"
          );
        }
        throw new Error("Неизвестная ошибка");
      }

      onSubmit?.();
    },
    [dispatch, onSubmit]
  );

  const { control, handleSubmit, formError, handleReset } = useLoginForm({
    onSubmit: submitHandler,
  });

  const restorePasswordClickHandler = useCallback(() => {
    router.push(paths.notImplemented());
  }, [router]);

  return (
    <StyledLoginForm {...restProps}>
      <Form.Content>
        <Row gutter={[0, 15]}>
          <Col span={24}>
            <InputFieldAdapter
              control={control}
              name="username"
              label="Электронная почта"
              placeholder="name@mail.com"
              right={<UserIcon />}
              inputProps={{ autoComplete: "username" }}
            />
          </Col>
          <Col span={24}>
            <PasswordFieldAdapter
              control={control}
              name="password"
              label="Ваш пароль"
              placeholder="·  ·  ·  ·  ·  ·  ·  ·  ·  ·"
              inputProps={{ autoComplete: "current-password" }}
              passwordFieldVariant="login"
            />
          </Col>
        </Row>
      </Form.Content>
      <Form.Error error={formError} />
      <Space size={25} />
      <Row gutter={[15, 15]} align="middle">
        <Col>
          <Button variant="primary" size="extralarge" onClick={handleSubmit}>
            Войти
          </Button>
        </Col>
        <Col>
          <FormAdditionalButton
            icon={<KeyIcon />}
            title={
              <>
                Восстановить&nbsp;
                <br />
                пароль
              </>
            }
            onSubmit={restorePasswordClickHandler}
          />
        </Col>
      </Row>
    </StyledLoginForm>
  );
};

export const LoginForm = memo(_LoginForm);
