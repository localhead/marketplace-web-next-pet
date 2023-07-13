import { MakePaymentDto } from './data-transfer-objects/make-payment.dto';

import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { AuthenticatedGuard } from 'src/auth/authenticated.guard';
import { ApiOkResponse } from '@nestjs/swagger';
import { MakePaymentResponse } from './types';

@Controller('payment')
export class PaymentController {
  // Step 51 опишем эндпоинт который мы будем триггерить
  // с фронта когда будем делать оплату и передвать туда amount

  constructor(private paymentService: PaymentService) {}

  @ApiOkResponse({ type: MakePaymentResponse })
  @UseGuards(AuthenticatedGuard)
  @Post()
  makePayment(@Body() makePaymentDto: MakePaymentDto) {
    return this.paymentService.makePayment(makePaymentDto);
  }
}
