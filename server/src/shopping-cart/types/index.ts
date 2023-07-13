// "id": 6,
// "userId": 4,
// "partId": 10,
// "boiler_manufacturer": "Air Jordan",
// "price": 6424,
// "parts_manufacturer": "India",
// "name": "Officia consequuntur.",
// "image": "https://loremflickr.com/640/480?lock=814729060679680?random=901227459751529187666973962803",
// "in_stock": 2,
// "count": 0,
// "total_price": 6424,
// "createdAt": "2023-07-06T19:26:50.000Z",
// "updatedAt": "2023-07-06T19:26:50.000Z"

import { ApiProperty } from '@nestjs/swagger';

class ShoppingCartItem {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: 1 })
  userId: number;

  @ApiProperty({ example: 1 })
  partId: number;

  @ApiProperty({ example: 'Air Jordan' })
  boiler_manufacturer: string;

  @ApiProperty({ example: 1 })
  price: number;

  @ApiProperty({ example: 'India' })
  parts_manufacturer: string;

  @ApiProperty({ example: 'Officia consequuntur.' })
  name: string;

  @ApiProperty({ example: 'https://loremflickr.com/640......' })
  image: string;

  @ApiProperty({ example: 1 })
  in_stock: number;

  @ApiProperty({ example: 1 })
  count: number;

  @ApiProperty({ example: 1 })
  total_price: number;

  @ApiProperty({ example: '2023-07-06T19:26:50.000Z' })
  createdAt: string;

  @ApiProperty({ example: '2023-07-06T19:26:50.000Z' })
  updatedAt: string;
}

export class GetAllResponse extends ShoppingCartItem {}

export class GetToCartResponse extends ShoppingCartItem {}

export class UpdateCountResponse {
  @ApiProperty({ example: 1 })
  count: number;
}

export class UpdateCountRequest {
  @ApiProperty({ example: 1 })
  count: number;
}

export class UpdateTotalPriceResponse {
  @ApiProperty({ example: 1 })
  total_price: number;
}

export class UpdateTotalPriceRequest {
  @ApiProperty({ example: 1 })
  total_price: number;
}
