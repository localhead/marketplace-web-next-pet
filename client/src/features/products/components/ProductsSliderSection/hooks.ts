import { productsApi } from "@features/products/store/apiService";
import { ProductOptions } from "./types";

export const useGetProductsOptions = (productsOption: ProductOptions) => {
  if (productsOption === "bestsellers") {
    const { data, isSuccess } = productsApi.useGetBestsellerProductsQuery();
    return { data, isSuccess };
  }

  if (productsOption === "new") {
    const { data, isSuccess } = productsApi.useGetNewProductsQuery();
    return { data, isSuccess };
  }
};
