import { useRestoreRequestEmailForm } from './hooks';
import { RestoreRequestEmailFormValues } from './types';

import { Form } from '@features/forms/components/Form';
import { InputFieldAdapter } from '@features/forms/components/InputFieldAdapter';
import { EnvelopeSimpleIcon } from '@packages/icons';
import { Button } from '@packages/uiKit';
import React, { FC, memo } from 'react';

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

  return (
    <Form autoComplete="off" {...restProps}>
      <Form.Content>
        <InputFieldAdapter
          control={control}
          name="email"
          label="Электронная почта"
          placeholder="name@mail.com"
          right={<EnvelopeSimpleIcon />}
        />
      </Form.Content>

      <Form.Error error={formError} />

      <Form.ButtonsContainer>
        <Button onClick={handleSubmit} size="extralarge">
          Отправить новый пароль
        </Button>
      </Form.ButtonsContainer>
    </Form>
  );
};

export const RestoreRequestEmailForm = memo(_RestoreRequestEmailForm);
