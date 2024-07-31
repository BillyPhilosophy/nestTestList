import { Module } from '@nestjs/common';
import { CccController } from './ccc.controller';
import { ConfigurableModuleClass } from './ccc.module-definition';
import { CccService } from './ccc.service';
@Module({
  controllers: [CccController],
  providers: [CccService],
  exports:[CccService]//全局模块需要此处导出
})
export class CccModule extends ConfigurableModuleClass{}
