import {
  BadRequestException,
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { AaaDto } from './aaa.dto';
import { AppService } from './app.service';
import { UnLoginException } from './unlogin.filter';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    // throw new BadRequestException('yyyy-MM-dd HH:mm')
    // throw new HttpException('BAD_REQUEST', HttpStatus.BAD_REQUEST);
    throw new UnLoginException();
    return this.appService.getHello();
  }

  @Post('aaa')
  Aaa(@Body() aaaDto: AaaDto) {
    return 'success';
  }
}
