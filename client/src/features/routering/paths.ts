import { ApiRecordId } from "@features/api";

export const paths = {
  root: () => "/",

  profile: () => "/profile",

  orders: () => "/profile/orders",
  address: () => "/profile/address",
  account: () => "/profile/account",
  reviews: () => "/profile/reviews",
  subscriptions: () => "/profile/subscriptions",

  products: () => "/products/",
  productDetail: (productId: ApiRecordId) => `/products/${productId}`,
  searchProducts: () => "/products/search",

  notImplemented: () => "/not-implemented",
};
