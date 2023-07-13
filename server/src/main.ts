import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as session from 'express-session';
import * as passport from 'passport';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Step 13 - реализуем логику сессий.
  // npm i express-session
  // npm i @types/express-session @types/passport
  app.use(
    session({
      secret: 'keyword',
      resave: false,
      saveUninitialized: false,
    }),
  );
  app.use(passport.initialize());
  app.use(passport.session());

  // без этих корсов ты не сможешь сделать запрос
  app.enableCors({
    credentials: true,
    origin: ['http://localhost:3001'],
  });

  // Step 13 - реализуем логику сессий.

  // Step 20 - иницилизуем свагер
  const config = new DocumentBuilder()
    .setTitle('Название магазина')
    .setDescription('Магазин одежды')
    .setVersion('1.0')
    .addTag('api')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document);
  // Step 21 - http://localhost:3010/swagger - переходим по адресу и видим свагер

  await app.listen(3010);
}
bootstrap();
