import { RegistrationFormValidValues, RegistrationFormValues } from "./types";

import { errorMessages } from "@features/forms/utils/errorMessages";
import {
  phoneValidation,
  stringValidation,
} from "@features/forms/utils/validation";
import { yupResolver } from "@hookform/resolvers/yup";
import { useUncontrolledForm } from "@hooks/useUncontrolledForm";
import { FormState } from "react-hook-form";
import * as yup from "yup";

const DEFAULT_VALUES: RegistrationFormValues = {
  name: "",
  surname: "",
  patronymic: "",
  city: null,
  tel: "",
  email: "",
  password: "",
  repeatPassword: "",
  isAgree: false,
};

export const validationSchema: yup.SchemaOf<
  Pick<
    RegistrationFormValues,
    "name" | "email" | "password" | "repeatPassword" | "isAgree" | "tel"
  >
> = yup
  .object({
    name: stringValidation().required(
      errorMessages.requiredErrorMessage("имя")
    ),
    email: stringValidation()
      .email(errorMessages.wrongEmailFormatErrorMessage())
      .required(errorMessages.requiredErrorMessage("email")),
    password: stringValidation().required(
      errorMessages.requiredErrorMessage("пароль")
    ),
    tel: phoneValidation.required(
      errorMessages.requiredErrorMessage("телефон")
    ),
    repeatPassword: stringValidation().equals(
      [yup.ref("password")],
      "Пароли должны совпадать"
    ),
    isAgree: yup
      .boolean()
      .equals([true], "Необходимо согласиться с политикой конфиденциальности"),
  })
  .required();

export type UseRegistrationFormParams = {
  onSubmit: (
    data: RegistrationFormValidValues,
    formState: FormState<RegistrationFormValues>
  ) => void | Promise<void>;
};

export const useRegistrationForm = (params: UseRegistrationFormParams) => {
  const { onSubmit } = params;
  return useUncontrolledForm<
    RegistrationFormValues,
    RegistrationFormValidValues
  >({
    defaultValues: DEFAULT_VALUES,
    resolver: yupResolver(validationSchema),
    onSubmit,
  });
};
