import { modalsSlice } from "../store/slice";

import { useAppDispatch } from "@features/store";
import { useMemo } from "react";

export const useGlobalModalsActions = () => {
  const dispatch = useAppDispatch();

  return useMemo(() => {
    return {
      openModal: (modalId: string, data?: any) => {
        dispatch(
          modalsSlice.actions.openModal({
            id: modalId,
            data,
          })
        );
      },

      closeModal: (modalId?: string) => {
        dispatch(modalsSlice.actions.closeModal({ id: modalId }));
      },
    };
  }, [dispatch]);
};
