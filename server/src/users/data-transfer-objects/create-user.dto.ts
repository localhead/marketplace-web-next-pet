import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

// Step 8 создаем dto - в nestJs - этот тип данных используется для  создания сущностей
export class CreateUserDto {
  // Step 22 - для свагера
  @ApiProperty({ example: 'Ivan' })
  // Нужно установить пакет для валидации полей npm i class-validator
  @IsNotEmpty()
  readonly username: string;

  // Step 22 - для свагера
  @ApiProperty({ example: '1234' })
  @IsNotEmpty()
  readonly password: string;

  // Step 22 - для свагера
  @ApiProperty({ example: 'ivan@mail.ru' })
  @IsNotEmpty()
  readonly email: string;
}
