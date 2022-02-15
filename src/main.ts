import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import {
  DocumentBuilder,
  SwaggerCustomOptions,
  SwaggerModule,
} from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    // bufferLogs: true,
  });

  const config = new DocumentBuilder()
    .setTitle('Tiko-Web-es-API')
    .setDescription(
      'This api designed for handling tiko web page home register form by Onur Ural',
    )
    .setVersion('1.0')
    .addTag('home-register-form')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  const customOptions: SwaggerCustomOptions = {
    customSiteTitle: 'Tiko API',
  };
  SwaggerModule.setup('api', app, document, customOptions);

  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
