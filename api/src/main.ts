import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { config } from 'dotenv';
import * as express from 'express';
import { CorsMiddleware } from './cors-handle/cors.middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  config();
  app.useGlobalPipes(new ValidationPipe());
  app.use(CorsMiddleware);
  app.use('/uploads', express.static('uploads'));
  await app.listen(3000);
}
bootstrap();
