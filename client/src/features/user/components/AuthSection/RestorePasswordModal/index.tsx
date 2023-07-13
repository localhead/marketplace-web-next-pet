import {
  RestoreRequestEmailForm,
  RestoreRequestEmailFormProps,
} from './RestoreRequestEmailForm';
import { RestoreRequestEmailFormValues } from './RestoreRequestEmailForm/types';
import { StyledDescription, StyledRestorePasswordRequestModal } from './styles';

import { userApi } from '@features/user/store';
import { useModalState } from '@hooks/useModalState';
import { Button, Modal, ModalProps } from '@packages/uiKit';
import { NotificationModal } from '@packages/uiKit/NotificationModal';
import React, { FC, memo, useCallback } from 'react';

export interface RestorePasswordRequestModalProps
  extends Omit<ModalProps, 'title'> {
  className?: string;
  style?: React.CSSProperties;

  onSubmit?: (data: RestoreRequestEmailFormValues) => void | Promise<any>;
  onClose?: () => void;
}

const _RestorePasswordRequestModal: FC<RestorePasswordRequestModalProps> = (
  props,
) => {
  const { onClose, onSubmit, ...restProps } = props;

  const [resetPasswordM] = userApi.useResetPasswordMutation();

  const [notificationModal, notificationModalActions] = useModalState();

  const restoreSubmitHandler: RestoreRequestEmailFormProps['onSubmit'] =
    useCallback(
      async (data: RestoreRequestEmailFormValues) => {
        try {
          await resetPasswordM({
            email: data.email,
          }).unwrap();

          notificationModalActions.openHandler();
          onClose?.();
        } catch (e) {
          throw new Error('Пользователя с таким email не существует'); //TODO в будущем отлавливать только на как-то сигнал
        }
      },
      [onClose, resetPasswordM, notificationModalActions],
    );

  return (
    <StyledRestorePasswordRequestModal>
      <Modal
        title="Восстановление пароля"
        width={560}
        onClose={onClose}
        isStretched={false}
        {...restProps}>
        <StyledDescription>
          Для восстановления пароля введите адрес вашей электронной почты
        </StyledDescription>
        <RestoreRequestEmailForm
          onClose={onClose}
          onSubmit={restoreSubmitHandler}
        />
      </Modal>

      <NotificationModal
        {...notificationModal}
        addition={
          <Button
            size="extralarge"
            onClick={notificationModalActions.closeHandler}>
            Перейти ко входу
          </Button>
        }
        description="Мы отправили письмо с ссылкой на изменение пароля на вашу электронную почту. 
        "
        title="Проверьте почту"
        onClose={notificationModalActions.closeHandler}
      />
    </StyledRestorePasswordRequestModal>
  );
};

export const RestorePasswordRequestModal = memo(_RestorePasswordRequestModal);
