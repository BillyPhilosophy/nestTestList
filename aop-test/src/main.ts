import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NextFunction, Request, Response } from 'express';
import { LoginGuard } from './login.guard';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(function (req: Request, res: Response, next: NextFunction) {
    console.log('before', req.url);
    next();
    console.log('after');
  })
  // app.useGlobalGuards(new LoginGuard())//全局守卫，缺点不在ioc容器中，且LoginGuard如果注入了其他的依赖，则无法使用该方式
  await app.listen(3000);
}
bootstrap();
