import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { config } from 'dotenv';
import * as express from 'express';
import { NestExpressApplication } from '@nestjs/platform-express'; // Import NestExpressApplication
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface'; // Import CorsOptions

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // Enable CORS
  const corsOptions: CorsOptions = {
    origin: true, // You can set specific origins or a boolean value
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true
  };

  app.enableCors(corsOptions);

  config();
  app.useGlobalPipes(new ValidationPipe());
  app.use('/uploads', express.static('uploads'));
  await app.listen(3000);
}

bootstrap();
