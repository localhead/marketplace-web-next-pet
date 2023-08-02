export type BestsellerProductsResponse = {
  count: number;
  rows: BoilerPartsRecord[];
};

export type NewProductsResponse = {
  count: number;
  rows: BoilerPartsRecord[];
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

export type GetFindByIdResponse = BoilerPartsRecord;

export type GetFindByIdRequest = {
  search: string;
};
