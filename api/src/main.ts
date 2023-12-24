import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { config } from 'dotenv';
import * as express from 'express';

const cors = require('cors');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  config();
  app.useGlobalPipes(new ValidationPipe());
  app.use(
    cors({
      origin: '*',
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
      optionsSuccessStatus: 204
    })
  );

  app.use('/uploads', express.static('uploads'));
  await app.listen(4001);
}

bootstrap();
