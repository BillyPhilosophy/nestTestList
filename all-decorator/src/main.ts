import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname,'..','views'));
  app.setViewEngine('hbs');
  app.use(session({
    secret:'dgc-secret',
    cookie:{ maxAge:60000 }
  }))
  await app.listen(3000);
}
bootstrap();
