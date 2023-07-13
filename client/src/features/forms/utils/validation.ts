import * as yup from "yup";
import { AnyObject } from "yup/lib/types";

export const phoneValidation = yup
  .string()
  .nullable()
  .matches(
    /^(\+7|7|8)?[\s-]?\([0-9]{3}\)?[\s-]?[0-9]{3}[\s-]?[0-9]{2}[\s-]?[0-9]{2}$/,
    "Неверный формат телефонного номера"
  );

export const stringValidation = () =>
  yup
    .string()
    .nullable()
    .defined("Значение должно быть определено") as yup.StringSchema<
    string | null,
    AnyObject,
    string | null
  >;

export const numberValidation = () =>
  yup
    .number()
    .nullable()
    .defined("Значение должно быть определено") as yup.NumberSchema<
    number | null,
    AnyObject,
    number | null
  >;

export const recordIdValidation = () =>
  yup
    .number()
    .nullable()
    .defined("Значение должно быть определено") as yup.NumberSchema<
    number | null,
    AnyObject,
    number | null
  >;
