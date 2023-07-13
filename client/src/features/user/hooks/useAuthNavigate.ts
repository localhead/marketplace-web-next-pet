import { useRouter } from "next/router";
import { useMemo } from "react";

export type UseAuthRedirectParams = {
  gentle?: boolean;
};

export const useAuthRedirect = (params: UseAuthRedirectParams) => {
  //TODO подумать нужен ли gentle
  const router = useRouter();

  return useMemo(() => {
    return () => {
      router.push("/auth");
    };
  }, [router]);
};
