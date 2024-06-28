import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LogMiddleware } from './log.middleware'
import { LoginGuard } from './login.guard';
import { TimeInterceptor } from './time.interceptor';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService,
    // {
    //   provide: 'APP_GUARD',//全局守卫，LoginGuard可以随意注入其他依赖，且在IOC容器中
    //   useClass: LoginGuard
    // }
    // {
    //   provide: 'APP_INTERCEPTOR',//全局守卫，TimeInterceptor可以随意注入其他依赖，且在IOC容器中
    //   useClass: TimeInterceptor
    // }
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LogMiddleware).forRoutes('aaa*')
  }
}
