import {
  Body,
  Controller,
  Get,
  Header,
  HttpCode,
  HttpStatus,
  Post,
  Request,
  UnauthorizedException,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBody,
  ApiOkResponse,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { LocalAuthGuard } from 'src/auth/local.auth.guard';
import { CreateUserDto } from './data-transfer-objects/create-user.dto';
import {
  LoginCheckResponse,
  LoginUserRequest,
  LoginUserResponse,
  LogoutUserResponse,
  SignUpResponse,
} from './types';
import { UsersService } from './users.service';

// Step 8 пишем эндпойнт сайнАп который будет создавать пользователя

// Users - корневой префикс
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // Префикс сайнап
  // Step 24 - для типы свагера
  @ApiOkResponse({ type: SignUpResponse })
  @Post('/signup')
  @HttpCode(HttpStatus.CREATED)
  @Header('Content-type', 'application/json')
  // Достаем данные из боди и создаем нового пользователя в таблице
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  // Step 17
  // Step 24 - для типы свагера
  @ApiBody({ type: LoginUserRequest })
  @ApiOkResponse({ type: LoginUserResponse })
  @Post('/login')
  @UseGuards(LocalAuthGuard)
  @HttpCode(HttpStatus.OK)
  login(@Request() req) {
    return { user: req.user, msg: 'Logged In' };
  }

  // Step 18
  // Step 24 - для типы свагера
  @ApiOkResponse({ type: LoginCheckResponse })
  @ApiUnauthorizedResponse({ description: 'Unauthorized' })
  @Get('/login-check')
  //@UseGuards(AuthenticatedGuard)
  loginCheck(@Request() req) {
    if (!req.user) {
      throw new UnauthorizedException('User not logged in');
    }
    return { user: req.user, msg: `User ${req.user.username} is logged in` };
  }

  // Step 19
  // Step 24 - для типы свагера
  @ApiOkResponse({ type: LogoutUserResponse })
  @Get('/logout')
  logout(@Request() req) {
    req.session.destroy();
    return { msg: 'Session has ended' };
  }
}

// Step 9 - далее запускам сервер - npm start. Идем в Postman и проверяем запросы.
// Все скрины есть в конспекте в Notion
