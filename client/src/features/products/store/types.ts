export type BestSellersResponse = {
  count: number;
  rows: BoilerPartsRecord;
};

export type BoilerPartsRecord = {
  id: number;
  boiler_manufacturer: string;
  price: number;
  parts_manufacturer: string;
  vendor_code: string;
  name: string;
  description: string;
  images: string;
  in_stock: number;
  bestsellers: boolean;
  new: boolean;
  popularity: number;
  compatibility: string;
  createdAt: string;
  updatedAt: string;
};

export type GetBySearchNameResponse = {
  count: number;
  rows: BoilerPartsRecord[];
};

export type GetBySearchNameRequest = {
  search: string | string[] | undefined | null;
};
