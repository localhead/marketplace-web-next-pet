import { useRegistrationForm, UseRegistrationFormParams } from "./hooks";
import {
  StyledAgreeCheckboxLabel,
  StyledAgreeLink,
  StyledRegistrationForm,
} from "./styles";

import { useWindowWidth } from "@features/adaptive/useWindowWidth";

import { CheckboxAdapter } from "@features/forms/components/CheckboxAdapter";
import { Form } from "@features/forms/components/Form";
import { InputFieldAdapter } from "@features/forms/components/InputFieldAdapter";
import { PasswordFieldAdapter } from "@features/forms/components/PasswordFieldAdapter";
import { userApi } from "@features/user/store";
import { Button } from "@packages/uiKit";
import { FetchBaseQueryError } from "@reduxjs/toolkit/dist/query";
import { Col, Row } from "antd";
import React, { FC, memo, useCallback } from "react";

export interface RegistrationFormProps {
  className?: string;
  style?: React.CSSProperties;

  onSubmit?: () => void;
}

const _RegistrationForm: FC<RegistrationFormProps> = (props) => {
  const { onSubmit, ...restProps } = props;

  const [registrationM, { isLoading: isLoadingRegistration }] =
    userApi.useRegistrationMutation();

  const width = useWindowWidth();

  const isMobile = width === "mobile";

  const submitHandler: UseRegistrationFormParams["onSubmit"] = useCallback(
    async (data) => {
      try {
        console.log(data);
        const { name: username, ...restData } = data;
        await registrationM({ username, ...restData }).unwrap();
      } catch (e) {
        console.log(e);
        if ((e as FetchBaseQueryError).status === 400) {
          throw new Error("Некорректно введены данные");
        }
        throw new Error("Неизвестная ошибка");
      }

      onSubmit?.();
    },
    [onSubmit, registrationM]
  );

  const {
    control,
    handleSubmit,
    formState: { isValid, isSubmitted },
    formError,
  } = useRegistrationForm({
    onSubmit: submitHandler,
  });

  return (
    <StyledRegistrationForm {...restProps}>
      <Form.Title>Войдите или создайте аккаунт</Form.Title>

      <Form.Content>
        <Row gutter={[15, 15]}>
          <Col span={24}>
            <InputFieldAdapter
              isFilled
              control={control}
              name="name"
              label="Ваше имя*"
              placeholder="Александр"
            />
          </Col>
          <Col span={24}>
            <InputFieldAdapter
              control={control}
              name="email"
              label="Электронная почта*"
              placeholder="name@mail.com"
              inputProps={{ autoComplete: "email" }}
            />
          </Col>
          <Col span={24} lg={12}>
            <PasswordFieldAdapter
              control={control}
              name="password"
              label="Придумайте пароль*"
              placeholder="·  ·  ·  ·  ·  ·  ·  ·  ·  ·"
              inputProps={{ autoComplete: "new-password" }}
            />
          </Col>
          <Col span={24} lg={12}>
            <PasswordFieldAdapter
              control={control}
              name="repeatPassword"
              label="Повторите ваш пароль*"
              placeholder="·  ·  ·  ·  ·  ·  ·  ·  ·  ·"
              inputProps={{ autoComplete: "off" }}
            />
          </Col>
        </Row>
      </Form.Content>

      <Form.Error error={formError} />

      <Form.ButtonsContainer>
        <Row gutter={[21, 24]} wrap={width === "mobile"} align="middle">
          <Col
            span={width === "mobile" ? 24 : undefined}
            order={isMobile ? 1 : 0}
          >
            <Button
              disabled={isLoadingRegistration}
              variant="primary"
              size="extralarge"
              block
              onClick={handleSubmit}
            >
              Зарегистрироваться
            </Button>
          </Col>
          <Col
            span={width === "mobile" ? 24 : undefined}
            order={isMobile ? 0 : 1}
          >
            <CheckboxAdapter
              control={control}
              name="isAgree"
              label={
                <StyledAgreeCheckboxLabel>
                  Согласие с{" "}
                  <StyledAgreeLink
                    onClick={(e) => e.stopPropagation()}
                    href="/"
                    target={"_blank"}
                  >
                    политикой конфиденциальности
                  </StyledAgreeLink>
                </StyledAgreeCheckboxLabel>
              }
            />
          </Col>
        </Row>
      </Form.ButtonsContainer>
    </StyledRegistrationForm>
  );
};

export const RegistrationForm = memo(_RegistrationForm);
