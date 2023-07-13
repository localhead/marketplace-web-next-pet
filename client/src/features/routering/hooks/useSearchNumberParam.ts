import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import { useCallback } from "react";

export type UseSearchParamOptions<ReturnType extends number | null> = {
  paramName: string;
  defaultValue?: ReturnType;
};

export function useSearchNumberParam<
  ReturnType extends number | null = number | null
>(options: UseSearchParamOptions<ReturnType>) {
  const { paramName, defaultValue } = options;

  const searchParams = useSearchParams();

  const router = useRouter();

  const realSearchParam = router.query[paramName];
  const parsedAsNumberRealSearchParam =
    typeof realSearchParam === "string"
      ? Number.parseFloat(realSearchParam)
      : Number.NaN;
  const searchParam = !Number.isNaN(parsedAsNumberRealSearchParam)
    ? (parsedAsNumberRealSearchParam as ReturnType)
    : defaultValue === undefined
    ? (null as unknown as ReturnType)
    : defaultValue;

  const setSearchParam = useCallback(
    (value: number | null) => {
      const newSearchParams = new URLSearchParams(searchParams);
      if (value === null) {
        newSearchParams.delete(paramName);
      } else {
        newSearchParams.set(paramName, value.toString());
      }

      router.replace({ search: newSearchParams.toString() }, undefined, {
        shallow: true,
      });
    },
    [paramName, router, searchParams]
  );

  return [searchParam, setSearchParam] as const;
}
