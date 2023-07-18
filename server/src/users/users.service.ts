import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from './data-transfer-objects/create-user.dto';
import { User } from './users.model';

// Step 7 пишем методы для работы с базой пользователей
@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User)
    private UsersModule: typeof User,
  ) {}

  // Метод для поиска конкретного пользователя
  findOne(filter: {
    where: { id?: string; username?: string; email?: string };
  }): Promise<User> {
    return this.UsersModule.findOne({ ...filter });
  }

  // Метод для создания нового пользователя
  async create(
    createUserDto: CreateUserDto,
  ): Promise<User | { warningMessage: string }> {
    // прежде чем создавать нового юзера - убеждаемся, что его нет в базе
    const newUser = new User();
    const existingByUsername = await this.findOne({
      where: { username: createUserDto.username },
    });
    const existingByEmail = await this.findOne({
      where: { email: createUserDto.email },
    });

    // if (existingByUsername) {
    //   throw new BadRequestException(
    //     'Пользователь с таким логином уже существует',
    //   );
    //   return { warningMessage: 'Пользователь с таким именем уже существует' };
    // }
    if (existingByEmail) {
      throw new BadRequestException(
        'Пользователь с такой электронной почтой уже существует',
      );
      return {
        warningMessage:
          'Пользователь с такой электронной почтой уже существует',
      };
    }

    // Захешируем пароль который нам прилетит с фронта
    // npm i bcrypt
    // npm i @types/bcrypt

    const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
    // второй аргумент в этом методе - уровень сложности хеширования

    newUser.username = createUserDto.username;
    newUser.password = hashedPassword;
    newUser.email = createUserDto.email;

    // Сохраняем пользователя в базу данных.
    return newUser.save();
  }
}
