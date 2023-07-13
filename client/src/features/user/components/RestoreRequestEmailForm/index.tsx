import { useRestoreRequestEmailForm } from "./hooks";
import { RestoreRequestEmailFormValues } from "./types";

import { Form } from "@features/forms/components/Form";
import { InputFieldAdapter } from "@features/forms/components/InputFieldAdapter";
import { paths } from "@features/routering/paths";
import { ArrowSquareLeftIcon } from "@packages/icons";
import { Button } from "@packages/uiKit";
import { Col, Row } from "antd";
import { useRouter } from "next/router";
import React, { FC, memo, useCallback } from "react";
import { FormAdditionalButton } from "../FormAdditionalButton";

export interface RestoreRequestEmailFormProps {
  className?: string;
  style?: React.CSSProperties;

  onClose?: () => void;
  onSubmit: (data: RestoreRequestEmailFormValues) => void | Promise<any>;
}

const _RestoreRequestEmailForm: FC<RestoreRequestEmailFormProps> = (props) => {
  const { onSubmit, ...restProps } = props;

  const { control, handleSubmit, formError } = useRestoreRequestEmailForm({
    onSubmit,
  });

  const router = useRouter();

  const backToAuthClickHandler = useCallback(() => {
    router.push(paths.auth());
  }, [router]);

  return (
    <Form autoComplete="off" {...restProps}>
      <Form.Content>
        <InputFieldAdapter
          control={control}
          name="email"
          label="Электронная почта"
          placeholder="name@mail.com"
        />
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

export const RestoreRequestEmailForm = memo(_RestoreRequestEmailForm);
