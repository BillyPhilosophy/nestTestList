import { Module, ValidationPipe } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { APP_PIPE } from '@nestjs/core';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService,
    {
      provide: "validation_options",
      useFactory() {
        return {
          aaa: 1,
          bbb: 2
        }
      }
    },
    {// 全局管道
      provide: APP_PIPE,
      useClass: ValidationPipe
    }
  ],
})
export class AppModule { }
