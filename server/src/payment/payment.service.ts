import { ForbiddenException, Injectable } from '@nestjs/common';
import axios from 'axios';
import { MakePaymentDto } from './data-transfer-objects/make-payment.dto';

@Injectable()
export class PaymentService {
  // Step 50 данный метод принимает объект с фронта
  async makePayment(makePaymentDto: MakePaymentDto) {
    try {
      const { data } = await axios({
        method: 'POST',
        // Этот эндпоинт взят с доков юкассы
        url: 'https://api.yookassa.ru/v3/payments',
        headers: {
          'Content-Type': 'application/json',
          // генерим всегда уникальное число
          'Idempotence-Key': Date.now(),
        },
        auth: {
          username: '228608',
          password: 'test_v4PZpAmdZfrcjPojyx-S8nXn63WXDPzkLPf38tT8kIQ',
        },
        data: {
          amount: {
            value: makePaymentDto.amount,
            currency: 'RUB',
          },
          // редирект после оплаты
          capture: true,
          confirmation: {
            type: 'redirect',
            return_url: 'http://localhost:3010/order',
          },
          description: 'Заказ №1',
        },
      });

      return data;
    } catch (error) {
      throw new ForbiddenException(error);
    }
  }
}
