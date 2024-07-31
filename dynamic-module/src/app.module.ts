import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BbbModule } from './bbb/bbb.module';
import { CccModule } from './ccc/ccc.module';

@Module({
  imports: [BbbModule.register({
    aaa:111,
    bbb:222
  }), CccModule.register({
    aaa:1,
    bbb:'2',
    isGlobal:true
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
