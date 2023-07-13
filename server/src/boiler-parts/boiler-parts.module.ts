import { Module } from '@nestjs/common';
import { BoilerPartsController } from './boiler-parts.controller';
import { BoilerPartsService } from './boiler-parts.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { BoilerParts } from './boiler-parts.model';

@Module({
  // Step 27 - подключаем в Модуле созданную таблицу
  imports: [SequelizeModule.forFeature([BoilerParts])],
  controllers: [BoilerPartsController],
  providers: [BoilerPartsService],
  // Step 28 - мы будем использовать Бойлер партс вне этого модуля (в текстах) - поэтому экспортируем.
  exports: [BoilerPartsService],
})
export class BoilerPartsModule {}
