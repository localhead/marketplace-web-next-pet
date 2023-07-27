import { ApiRecordId } from "@features/api";

export const paths = {
  root: () => "/",

  profile: () => "/profile",

  products: () => "/products/",
  productDetail: (productId: ApiRecordId) => `/products/${productId}`,
  searchProducts: () => "/products/search",

  notImplemented: () => "/not-implemented",
};
