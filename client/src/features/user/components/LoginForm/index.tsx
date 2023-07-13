import React, { FC, memo, useCallback } from "react";

import { Form } from "@features/forms/components/Form";
import { InputFieldAdapter } from "@features/forms/components/InputFieldAdapter";
import { PasswordFieldAdapter } from "@features/forms/components/PasswordFieldAdapter";
import { paths } from "@features/routering/paths";
import { KeyIcon, UserIcon } from "@packages/icons";
import { Button } from "@packages/uiKit/Button";
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

  const submitHandler: UseLoginFormParams["onSubmit"] = useCallback(
    async (data) => {
      onSubmit?.();
    },
    [onSubmit]
  );

  const { control, handleSubmit, formError } = useLoginForm({
    onSubmit: submitHandler,
  });

  const restorePasswordClickHandler = useCallback(() => {
    router.push(paths.restorePassword());
  }, [router]);

  return (
    <StyledLoginForm {...restProps}>
      <Form.Content>
        <Row gutter={[0, 15]}>
          <Col span={24}>
            <InputFieldAdapter
              control={control}
              name="login"
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
      <Form.ButtonsContainer>
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
      </Form.ButtonsContainer>
    </StyledLoginForm>
  );
};

export const LoginForm = memo(_LoginForm);
