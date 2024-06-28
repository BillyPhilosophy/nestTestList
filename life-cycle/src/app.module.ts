import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CccModule } from './ccc/ccc.module';
import { DddModule } from './ddd/ddd.module';

@Module({
  imports: [CccModule, DddModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
