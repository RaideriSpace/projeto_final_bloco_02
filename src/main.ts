import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { SwaggerTheme, SwaggerThemeNameEnum } from 'swagger-themes';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const theme = new SwaggerTheme();

  const config = new DocumentBuilder()
    .setTitle('API FarmaGen')
    .setDescription(
      'Projeto Final Bloco 2 - Generation Brasil - Lucas Alves Pinheiro',
    )
    .setContact(
      'Lucas Alves Pinheiro',
      'https://github.com/RaideriSpace/projeto_final_bloco_02',
      'l.pinheiro.w@gmail.com',
    )
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  const options = {
    customSiteTitle: "API FarmaGen",
    customCss: theme.getBuffer(SwaggerThemeNameEnum.MUTED)
  }

  SwaggerModule.setup('/swagger', app, document, options);

  process.env.TZ = '-03:00';

  app.useGlobalPipes(new ValidationPipe());

  app.enableCors();

  await app.listen(process.env.PORT ?? 4000);
}
bootstrap();
