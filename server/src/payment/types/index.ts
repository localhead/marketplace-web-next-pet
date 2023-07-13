// {
//     "id": "2c3b6c4b-000f-5000-9000-13f9f835831e",
//     "status": "pending",
//     "amount": {
//         "value": "150.00",
//         "currency": "RUB"
//     },
//     "description": "Заказ №1",
//     "recipient": {
//         "account_id": "228608",
//         "gateway_id": "2095103"
//     },
//     "created_at": "2023-07-08T12:37:31.951Z",
//     "confirmation": {
//         "type": "redirect",
//         "confirmation_url": "https://yoomoney.ru/checkout/payments/v2/contract?orderId=2c3b6c4b-000f-5000-9000-13f9f835831e"
//     },
//     "test": true,
//     "paid": false,
//     "refundable": false,
//     "metadata": {}
// }

import { ApiProperty } from '@nestjs/swagger';

// Step 52 - прописываем типы для свагера
export class MakePaymentResponse {
  @ApiProperty({ example: '2c3b6c4b-000f-5000-9000-13f9f835831e' })
  id: number;

  @ApiProperty({ example: 'pending' })
  status: string;

  @ApiProperty({ example: { value: '150', currency: 'RU' } })
  amount: {
    value: string | number;
    currency: string;
  };

  @ApiProperty({ example: 'Заказ №1' })
  description: string;

  @ApiProperty({ example: { account_id: '228608', gateway_id: '228608' } })
  recipient: {
    account_id: string | number;
    gateway_id: string | number;
  };

  @ApiProperty({ example: '2023-07-08T12:37:31.951Z' })
  created_at: string;

  @ApiProperty({
    example: { account_id: 'redirect', gateway_id: 'https://yoomoney.ru....' },
  })
  confirmation: {
    type: string;
    confirmation_url: string;
  };

  @ApiProperty({ example: 'true' })
  test: boolean;

  @ApiProperty({ example: 'true' })
  paid: boolean;

  @ApiProperty({ example: 'true' })
  refundable: boolean;

  @ApiProperty({ example: '_' })
  metadata: object;
}
