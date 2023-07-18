import { userApi } from "@features/user";

import { modalsSlice } from "@features/modals/store/slice";

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";

const combinedReducer = combineReducers({
  [modalsSlice.name]: modalsSlice.reducer,

  [userApi.reducerPath]: userApi.reducer,
});

const makeStore = () => {
  const store = configureStore({
    reducer: combinedReducer,

    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware().concat(
        // citiesApi.middleware,
        // faqApi.middleware,
        userApi.middleware
      );
    },
  });

  return store;
};

export type AppStore = ReturnType<typeof makeStore>;

export const storeWrapper = createWrapper(makeStore);
