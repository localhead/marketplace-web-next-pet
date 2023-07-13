import { CityRecord } from '@features/cities/store';

export type RegistrationFormValues = {
  name: string;
  surname: string;
  patronymic: string;
  city: CityRecord | null;
  tel: string;
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
