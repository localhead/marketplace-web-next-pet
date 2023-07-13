import { AppRootState, useAppSelector } from "@features/store";

const selector = (state: AppRootState) => state.modals;
export const useGlobalModalsState = () => {
  return useAppSelector(selector);
};
