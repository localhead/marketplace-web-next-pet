import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  // Step 10
  // пишем метод валидации пользователя LOGIN
  constructor(private readonly usersService: UsersService) {}

  async validateUser(email: string, password: string) {
    const user = await this.usersService.findOne({ where: { email } });

    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const passwordValid = await bcrypt.compare(password, user.password);

    if (!passwordValid) {
      throw new UnauthorizedException('Invalid credentials');
    }

    // если все ок - возвращаем данные о пользователе
    if (user && passwordValid) {
      return {
        userId: user.id,
        username: user.username,
        email: user.email,
      };
    }

    return null;
    // Step 11 - реализуем логику сессий.
    // Устанавливаем пакет npm i passport passport-local @nestjs/passport
  }
}
