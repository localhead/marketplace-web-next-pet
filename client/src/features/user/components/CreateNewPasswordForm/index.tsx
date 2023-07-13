import { useCreateNewPasswordForm } from "./hooks";

import { CreateNewPasswordFormValues } from "./types";

import { Form } from "@features/forms/components/Form";
import { PasswordFieldAdapter } from "@features/forms/components/PasswordFieldAdapter";
import { Button } from "@packages/uiKit";
import { Col, Row } from "antd";

import React, { FC, memo } from "react";

export interface CreateNewPasswordFormProps {
  className?: string;
  style?: React.CSSProperties;

  onSubmit: (data: CreateNewPasswordFormValues) => void | Promise<any>;
}

const autocompleteIgnoreInputProps = {
  autoComplete: "off",
};

const _CreateNewPasswordForm: FC<CreateNewPasswordFormProps> = (props) => {
  const { onSubmit, ...restProps } = props;

  const { control, handleSubmit, formError } = useCreateNewPasswordForm({
    onSubmit,
  });

  return (
    <Form autoComplete="off" {...restProps}>
      <Form.Content>
        <Row gutter={[15, 15]}>
          <Col sm={24} span={24}>
            <PasswordFieldAdapter
              control={control}
              name="password"
              label="Придумайте новый пароль"
              inputProps={autocompleteIgnoreInputProps}
              placeholder="······"
              passwordFieldVariant="restore"
            />
          </Col>
          <Col sm={24} span={24}>
            <PasswordFieldAdapter
              control={control}
              name="passwordRepeat"
              label="Повторите новый пароль"
              inputProps={autocompleteIgnoreInputProps}
              placeholder="······"
              passwordFieldVariant="restore"
            />
          </Col>
        </Row>
      </Form.Content>
      <Form.Error error={formError} />

      <Form.ButtonsContainer>
        <Button onClick={handleSubmit} size="extralarge">
          Сохранить пароль
        </Button>
      </Form.ButtonsContainer>
    </Form>
  );
};

export const CreateNewPasswordForm = memo(_CreateNewPasswordForm);
