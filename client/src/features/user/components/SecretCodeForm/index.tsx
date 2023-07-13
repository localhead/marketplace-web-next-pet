import { useCreateNewPasswordForm as useSecretCodeForm } from "./hooks";

import { CreateNewPasswordFormValues } from "./types";

import { Form } from "@features/forms/components/Form";
import { Button } from "@packages/uiKit";
import { Col, Row } from "antd";

import { InputNumberFieldAdapter } from "@features/forms/components/InputNumberFieldAdapter";
import { paths } from "@features/routering/paths";
import { ArrowSquareLeftIcon } from "@packages/icons";
import { useRouter } from "next/router";
import React, { FC, memo, useCallback } from "react";
import { FormAdditionalButton } from "../FormAdditionalButton";
import { Timer } from "./Timer";
import { StyledDescription } from "./styles";

export interface SecretCodeFormProps {
  className?: string;
  style?: React.CSSProperties;

  onSubmit: (data: CreateNewPasswordFormValues) => void | Promise<any>;
}

const autocompleteIgnoreInputProps = {
  autoComplete: "off",
};

const _SecretCodeForm: FC<SecretCodeFormProps> = (props) => {
  const { onSubmit, ...restProps } = props;

  const { control, handleSubmit, formError } = useSecretCodeForm({
    onSubmit,
  });

  const router = useRouter();

  const backToAuthClickHandler = useCallback(() => {
    router.push(paths.auth());
  }, [router]);

  return (
    <Form autoComplete="off" {...restProps}>
      <Form.Content>
        <Row gutter={[15, 15]}>
          <Col sm={24} span={24}>
            <InputNumberFieldAdapter
              control={control}
              name="secretCode"
              label="Код из письма"
              inputProps={autocompleteIgnoreInputProps}
              placeholder="· · · · · ·"
              maxLength={6}
            />
          </Col>
          <Col sm={24} span={24}>
            <StyledDescription>
              Код отправлен на alexmain@mail.com Запросить повторно можно через
            </StyledDescription>
          </Col>
          <Col sm={24} span={24}>
            <Timer initTime={70} />
          </Col>
        </Row>
      </Form.Content>
      <Form.Error error={formError} />

      <Form.ButtonsContainer>
        <Row gutter={[15, 15]} align="middle">
          <Col>
            <Button variant="primary" size="extralarge" onClick={handleSubmit}>
              Продолжить
            </Button>
          </Col>
          <Col>
            <FormAdditionalButton
              icon={<ArrowSquareLeftIcon />}
              title={
                <>
                  Вернуться&nbsp;
                  <br /> ко входу
                </>
              }
              onSubmit={backToAuthClickHandler}
            />
          </Col>
        </Row>
      </Form.ButtonsContainer>
    </Form>
  );
};

export const SecretCodeForm = memo(_SecretCodeForm);
