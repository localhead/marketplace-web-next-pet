import { RestoreRequestEmailFormValues } from './types';

import { errorMessages } from '@features/forms/utils/errorMessages';

import { yupResolver } from '@hookform/resolvers/yup';
import { useUncontrolledForm } from '@hooks/useUncontrolledForm';

import * as yup from 'yup';

const DEFAULT_VALUES: RestoreRequestEmailFormValues = {
  email: '',
};

const schema: yup.SchemaOf<RestoreRequestEmailFormValues> = yup.object({
  email: yup
    .string()
    .email(errorMessages.wrongEmailFormatErrorMessage())
    .nullable()
    .required('Введите данные'),
});

export type UseRestoreRequestEmailFormParams = {
  onSubmit: (data: RestoreRequestEmailFormValues) => Promise<any> | void;
};

export const useRestoreRequestEmailForm = (
  params: UseRestoreRequestEmailFormParams,
) => {
  const { onSubmit } = params;

  return useUncontrolledForm<RestoreRequestEmailFormValues>({
    onSubmit,
    defaultValues: DEFAULT_VALUES,
    resolver: yupResolver(schema),
  });
};
