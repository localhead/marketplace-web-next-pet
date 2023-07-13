import { errorMessages } from "@features/forms/utils/errorMessages";
import { stringValidation } from "@features/forms/utils/validation";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  useUncontrolledForm,
  UseUncontrolledFormSubmitCb,
} from "@hooks/useUncontrolledForm";
import * as yup from "yup";
import {
  CreateUserAddressFormValidValues,
  CreateUserAddressFormValues,
} from "./types";

const DEFAULT_VALUES: CreateUserAddressFormValues = {
  address: null,
  apt: null,
  house: null,
  postcode: null,
  region: null,
};

export const validationSchema: yup.SchemaOf<
  Omit<CreateUserAddressFormValues, "region">
> = yup
  .object({
    region: yup.object().nullable().required("Выберите город"),
    address: stringValidation().required(
      errorMessages.requiredErrorMessage("адрес")
    ),
    house: stringValidation(),
    apt: stringValidation(),
    postcode: stringValidation(),
  })
  .required();

export type UseCreateUserAddressFormParams = {
  onSubmit: UseUncontrolledFormSubmitCb<
    CreateUserAddressFormValues,
    CreateUserAddressFormValidValues
  >;
};
export const useCreateUserAddressForm = (
  params: UseCreateUserAddressFormParams
) => {
  const { onSubmit } = params;
  return useUncontrolledForm<
    CreateUserAddressFormValues,
    CreateUserAddressFormValidValues
  >({
    onSubmit,
    resolver: yupResolver(validationSchema),
    defaultValues: DEFAULT_VALUES,
  });
};
