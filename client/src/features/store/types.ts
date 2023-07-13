import { Action, ThunkAction } from "@reduxjs/toolkit";
import { AppStore } from "./store";

export type AppDispatch = AppStore["dispatch"];
export type AppRootState = ReturnType<AppStore["getState"]>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppRootState,
  unknown,
  Action<string>
>;
