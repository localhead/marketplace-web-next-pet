import { ApiProperty } from '@nestjs/swagger';

// Step 23 - для типы свагера
export class LoginUserRequest {
  @ApiProperty({ example: 'test@mail.ru' })
  email: string;

  @ApiProperty({ example: '1234' })
  password: string;
}

// {
//     "user": {
//         "userId": 2,
//         "username": "Vova",
//         "email": "bomba@mail.ru"
//     },
//     "msg": "Logged In"
// }

export class LoginUserResponse {
  @ApiProperty({
    example: { user: { userId: 1, username: 'Ivan', password: 'teSt123' } },
  })
  user: {
    userId: number;
    username: string;
    password: string;
  };

  @ApiProperty({ example: 'message' })
  msg: string;
}

export class LoginCheckResponse {
  @ApiProperty({ example: 'Ivan' })
  username: string;

  @ApiProperty({ example: '1234' })
  password: string;

  @ApiProperty({ example: 'ivan@mail.ru' })
  email: string;
}

export class LogoutUserResponse {
  @ApiProperty({ example: 'Session has ended' })
  msg: string;
}

export class SignUpResponse {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: 'Ivan' })
  username: string;

  @ApiProperty({
    example: '$2b$10$Mc.A9VL7N.2rbyV4xlCBVuvcqgTguN3jn5pk9uqVdUyaiJlLi6h1O',
  })
  password: string;

  @ApiProperty({ example: 'ivan@mail.ru' })
  email: string;

  @ApiProperty({ example: '2023-06-22T09:30:58.840Z' })
  updatedAt: string;

  @ApiProperty({ example: '2023-06-22T09:30:58.840Z' })
  createdAt: string;
}
