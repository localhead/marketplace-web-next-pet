import { stringValidation } from "@features/forms/utils/validation";
import { LoginFormValues } from "./types";

import { yupResolver } from "@hookform/resolvers/yup";
import { useUncontrolledForm } from "@hooks/useUncontrolledForm";
import { FormState } from "react-hook-form";
import * as yup from "yup";

const DEFAULT_VALUES: LoginFormValues = {
  login: "",
  password: "",
};

export const validationSchema: yup.SchemaOf<LoginFormValues> = yup
  .object({
    login: stringValidation()
      .email("Неправильный формат email")
      .required("Заполните поле email"),
    password: stringValidation().required("Заполните поле с паролем"),
  })
  .required();

export type UseLoginFormParams = {
  onSubmit: (
    data: LoginFormValues,
    formState: FormState<LoginFormValues>
  ) => void | Promise<void>;
};

export const useLoginForm = (params: UseLoginFormParams) => {
  const { onSubmit } = params;
  return useUncontrolledForm<LoginFormValues>({
    defaultValues: DEFAULT_VALUES,
    resolver: yupResolver(validationSchema),
    onSubmit,
  });
};
