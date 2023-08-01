import { useMemo } from "react";
import { ProductCard } from "../components/ProductCard";
import { BoilerPartsRecord } from "../store/types";

export const useMapProductCards = (data: BoilerPartsRecord[] | null) => {
  return useMemo(() => {
    return data?.map((item) => {
      return <ProductCard key={item.id} data={item} />;
    });
  }, [data]);
};
