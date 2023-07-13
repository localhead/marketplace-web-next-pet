import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

// Step 45 создаем dto - в nestJs - этот тип данных используется для  создания сущностей
export class AddToCartDto {
  // для свагера
  @ApiProperty({ example: 'Ivan' })
  // Нужно установить пакет для валидации полей npm i class-validator
  @IsNotEmpty()
  // юзернейм пользователя который на данный момент залогинен
  readonly username: string;

  // для свагера
  @ApiProperty({ example: 1 })
  @IsNotEmpty()
  userId?: number;

  // для свагера
  @ApiProperty({ example: 1 })
  @IsNotEmpty()
  readonly partId: number;
}
