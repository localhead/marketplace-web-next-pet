import {
  BestsellerProductsResponse,
  NewProductsResponse,
} from "@features/products/store/types";

export enum ProductOptions {
  bestsellers = "bestsellers",
  new = "new",
}

export type ProductsOptionsHookResponse =
  | {
      data: NewProductsResponse | BestsellerProductsResponse | undefined;
      isSuccess: boolean;
    }
  | undefined;
