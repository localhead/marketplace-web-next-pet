import { authSlice, userApi } from "@features/user";

import { modalsSlice } from "@features/modals/store/slice";

import { productsApi } from "@features/products/store/apiService";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";

const combinedReducer = combineReducers({
  [modalsSlice.name]: modalsSlice.reducer,

  [userApi.reducerPath]: userApi.reducer,
  [productsApi.reducerPath]: productsApi.reducer,
  [authSlice.name]: authSlice.reducer,
});

const makeStore = () => {
  const store = configureStore({
    reducer: combinedReducer,

    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware().concat(
        // citiesApi.middleware,
        // faqApi.middleware,
        userApi.middleware,
        productsApi.middleware
      );
    },
  });

  return store;
};

export type AppStore = ReturnType<typeof makeStore>;

export const storeWrapper = createWrapper(makeStore);
