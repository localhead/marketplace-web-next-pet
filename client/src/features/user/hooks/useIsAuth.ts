import { useAppSelector } from '@features/store';

export const useIsAuth = () => {
  return useAppSelector((state) => state.auth.isAuth);
};
