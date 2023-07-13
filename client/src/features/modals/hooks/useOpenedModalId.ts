import { AppRootState, useAppSelector } from "@features/store";

const selector = (state: AppRootState) => state.modals.openModalId;
export const useOpenedModalId = () => {
  return useAppSelector(selector);
};
