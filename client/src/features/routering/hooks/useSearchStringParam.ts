import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import { useCallback } from "react";

export type UseSearchParamOptions<ReturnType extends string | null> = {
  paramName: string;
  defaultValue?: ReturnType;
};
export const useSearchStringParam = <
  ReturnType extends string | null = string | null
>(
  options: UseSearchParamOptions<ReturnType>
) => {
  const { paramName, defaultValue } = options;

  const searchParams = useSearchParams();

  const router = useRouter();

  const realSearchParam = router.query[paramName];
  const searchParam =
    typeof realSearchParam === "string"
      ? (realSearchParam as ReturnType)
      : defaultValue === undefined
      ? (null as unknown as ReturnType)
      : defaultValue;

  const setSearchParam = useCallback(
    (value: string | null) => {
      const newSearchParams = new URLSearchParams(searchParams);
      if (value === null) {
        newSearchParams.delete(paramName);
      } else {
        newSearchParams.set(paramName, value);
      }

      router.replace({ search: newSearchParams.toString() }, undefined, {
        shallow: true,
      });
    },
    [paramName, router, searchParams]
  );

  return [searchParam, setSearchParam] as const;
};
