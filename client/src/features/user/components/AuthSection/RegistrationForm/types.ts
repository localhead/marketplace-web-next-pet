export type RegistrationFormValues = {
  name: string;
  email: string;
  password: string;
  repeatPassword: string;
  isAgree: boolean;
};

type RegistrationFormValidValuesExceptions = {};

export type RegistrationFormValidValues = Omit<
  RegistrationFormValues,
  keyof RegistrationFormValidValuesExceptions
> &
  RegistrationFormValidValuesExceptions;
