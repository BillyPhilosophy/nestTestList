import { Global, Module } from '@nestjs/common';
import { AaaService } from './aaa.service';
import { AaaController } from './aaa.controller';

@Global()//其他模块使用exports中的provider不再需要在自己所在模块里import
@Module({
  controllers: [AaaController],
  providers: [AaaService],
  exports:[AaaService]
})
export class AaaModule {}
