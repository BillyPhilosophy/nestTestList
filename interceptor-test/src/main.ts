import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AaaInterceptor } from './aaa.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 要么token注入不需要useGlobalInterceptor，要么useGlobalInterceptors使用app.useGlobalInterceptors(app.get(AaaInterceptor))；文章中的app.useGlobalInterceptors(new AaaInterceptor())后再token注入一定会报错
  app.useGlobalInterceptors(app.get(AaaInterceptor))
  await app.listen(3000);
}
bootstrap();
