import { CreateNewPasswordFormValues } from "./types";

import { yupResolver } from "@hookform/resolvers/yup";

import { useUncontrolledForm } from "@hooks/useUncontrolledForm";
import * as yup from "yup";

const DEFAULT_VALUES: CreateNewPasswordFormValues = {
  secretCode: "",
};

const schema: yup.SchemaOf<CreateNewPasswordFormValues> = yup.object({
  secretCode: yup
    .string()
    .required("Введите данные")
    .matches(/^\d{6}$/, "Код должен быть из шести цифр")
    .nullable(),
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
