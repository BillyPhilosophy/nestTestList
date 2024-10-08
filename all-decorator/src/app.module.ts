import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AaaModule } from './aaa/aaa.module';
import { AaaController } from './aaa.controller';

@Module({
  imports: [AaaModule],
  controllers: [AppController, AaaController],
  providers: [
    AppService,
    // { provide:'dgc',useFactory(){
    //   return {
    //     name: 'dgc',
    //   }
    // }}
  ],
})
export class AppModule {}
