import { CityRecord } from "@features/cities/store";

export type CreateUserAddressFormValues = {
  region: CityRecord | null; // Город
  address: string | null;
  house: string | null;
  apt: string | null;
  postcode: string | null;
};

export type CreateUserAddressFormValidValues = {
  region: CityRecord; // Город
  address: string;
  house: string | null;
  apt: string | null;
  postcode: string | null;
};
