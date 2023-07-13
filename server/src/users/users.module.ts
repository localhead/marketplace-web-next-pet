import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './users.model';

@Module({
  // Step 1
  // npm i @nestjs/sequelize and adding SequelizeModule
  imports: [SequelizeModule.forFeature([User])],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
