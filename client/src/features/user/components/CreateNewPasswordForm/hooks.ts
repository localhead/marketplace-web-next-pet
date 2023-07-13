import { CreateNewPasswordFormValues } from "./types";

import { yupResolver } from "@hookform/resolvers/yup";

import { useUncontrolledForm } from "@hooks/useUncontrolledForm";
import * as yup from "yup";

const DEFAULT_VALUES: CreateNewPasswordFormValues = {
  password: "",
  passwordRepeat: "",
};

const schema: yup.SchemaOf<CreateNewPasswordFormValues> = yup.object({
  password: yup.string().required("Введите данные"),
  passwordRepeat: yup
    .string()
    .required("Повторите ваш пароль")
    .equals([yup.ref("password")], "Пароли должны совпадать"),
});

export type UseCreateNewPasswordFormParams = {
  onSubmit: (data: CreateNewPasswordFormValues) => Promise<any> | void;
};

export const useCreateNewPasswordForm = (
  params: UseCreateNewPasswordFormParams
) => {
  const { onSubmit } = params;

  return useUncontrolledForm<CreateNewPasswordFormValues>({
    onSubmit,
    defaultValues: DEFAULT_VALUES,
    resolver: yupResolver(schema),
  });
};
