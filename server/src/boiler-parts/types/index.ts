import { ApiProperty } from '@nestjs/swagger';

export interface IBoilerPartsQuery {
  limit: string;
  offset: string;
}

class BoilerPartsRecord {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: 'Under Armor' })
  boiler_manufacturer: string;

  @ApiProperty({ example: 250 })
  price: number;

  @ApiProperty({ example: 'Greece' })
  parts_manufacturer: string;

  @ApiProperty({ example: 'Tk0ReZMR3fixny7' })
  vendor_code: string;

  @ApiProperty({ example: 'Molestiae voluptatibus.' })
  name: string;

  @ApiProperty({ example: 'Tk0ReZMR3fixny7' })
  description: string;

  @ApiProperty({ example: 'Tk0ReZMR3fixny7' })
  images: string;

  @ApiProperty({ example: 1 })
  in_stock: number;

  @ApiProperty({ example: true })
  bestsellers: boolean;

  @ApiProperty({ example: true })
  new: boolean;

  @ApiProperty({ example: 1 })
  popularity: number;

  @ApiProperty({ example: 'Sint modi maxime dolor tempora nihil minima.' })
  compatibility: string;

  @ApiProperty({ example: '2023-07-02T10:09:05.000Z' })
  createdAt: string;

  @ApiProperty({ example: '2023-07-02T10:09:05.000Z' })
  updatedAt: string;
}

//Step 41 - пропишем для типы свагера
export class PaginateAndFilterResponse {
  @ApiProperty({ example: 10 })
  count: number;

  @ApiProperty({ type: BoilerPartsRecord, isArray: true })
  rows: BoilerPartsRecord;
}

export class Bestsellers extends BoilerPartsRecord {
  @ApiProperty({ example: true })
  bestsellers: boolean;
}

export class GetBestsellersResponse extends PaginateAndFilterResponse {
  @ApiProperty({ example: 10 })
  count: number;

  @ApiProperty({ type: BoilerPartsRecord, isArray: true })
  rows: Bestsellers;
}

export class NewParts extends BoilerPartsRecord {
  @ApiProperty({ example: true })
  new: boolean;
}

export class GetNewResponse extends PaginateAndFilterResponse {
  @ApiProperty({ example: 10 })
  count: number;

  @ApiProperty({ type: BoilerPartsRecord, isArray: true })
  rows: NewParts;
}

export class SearchResponse extends PaginateAndFilterResponse {}

export class SearchRequest extends PaginateAndFilterResponse {
  @ApiProperty({ example: 'The Word' })
  search: string;
}

export class GetByNameResponse extends BoilerPartsRecord {}

export class GetByNameRequest extends PaginateAndFilterResponse {
  @ApiProperty({ example: 'The Name' })
  name: string;
}

export class FindOneResponse extends BoilerPartsRecord {}
