import {
  Body,
  Controller,
  Get,
  Header,
  HttpCode,
  HttpStatus,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { ApiBody, ApiOkResponse } from '@nestjs/swagger';
import { AuthenticatedGuard } from 'src/auth/authenticated.guard';
import { CreateUserDto } from './data-transfer-objects/create-user.dto';
import {
  LoginCheckResponse,
  LoginUserRequest,
  LoginUserResponse,
  LogoutUserResponse,
  SignUpResponse,
} from './types';
import { UsersService } from './users.service';
import { LocalAuthGuard } from 'src/auth/local.auth.guard';

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
  @Get('/login-check')
  @UseGuards(AuthenticatedGuard)
  loginCheck(@Request() req) {
    return req.user;
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
