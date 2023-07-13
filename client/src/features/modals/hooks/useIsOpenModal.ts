import { useOpenedModalId } from "./useOpenedModalId";

export const useIsOpenDrawer = (drawerId: string) => {
  const openDrawerId = useOpenedModalId();
  return openDrawerId === drawerId;
};
