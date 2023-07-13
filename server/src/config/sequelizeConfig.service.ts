// Step 7

import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
  SequelizeModuleOptions,
  SequelizeOptionsFactory,
} from '@nestjs/sequelize';
import { User } from 'src/users/users.model';

// Step 4
// Класс конфигурации для секвазайза
@Injectable()
export class SequelizeConfigService implements SequelizeOptionsFactory {
  constructor(private readonly configService: ConfigService) {}

  createSequelizeOptions(): SequelizeModuleOptions {
    const {
      sql: { dialect, logging, host, port, username, password, database },
    } = this.configService.get('database');

    return {
      dialect,
      logging,
      host,
      port,
      username,
      password,
      database,
      models: [User],
      autoLoadModels: true,
      synchronize: true,
      // кодировка которая позволит сохранять кириллицу
      define: { charset: 'utf8', collate: 'utf8_general_ci' },
    };
  }
}
// Step 4
