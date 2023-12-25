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
  const corsMiddleware = new CorsMiddleware();
  app.use((req, res, next) => corsMiddleware.use(req, res, next));
  app.use('/uploads', express.static('uploads'));
  await app.listen(3000);
}
bootstrap();
