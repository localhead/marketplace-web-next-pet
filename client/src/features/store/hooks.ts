import { AppDispatch, AppRootState } from "./types";

import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

// Используйте эти хуки в приложении, потому что в них протипизирован appStore и thunks
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<AppRootState> = useSelector;
