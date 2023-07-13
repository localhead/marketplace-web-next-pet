import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

// Step 51 создаем dto - в nestJs - этот тип данных используется для  создания сущностей
export class MakePaymentDto {
  // для свагера
  @ApiProperty({ example: 1200 })
  // Нужно установить пакет для валидации полей npm i class-validator
  @IsNotEmpty()
  // юзернейм пользователя который на данный момент залогинен
  readonly amount: number;
}
