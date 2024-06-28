import { Controller, Get, Header, Headers, ParseIntPipe, Query, SetMetadata, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AaaGuard } from './aaa.guard';
import { Aaa } from './aaa.decorator';
import { Bbb } from './bbb.decorator';
import { Ccc } from './ccc.decorator';
import { MyHeaders } from './my-header.decorator';
import { MyQuery } from './my-query.decorator';
import { Ddd } from './ddd.decorator';

// @Controller()
@Ddd('eee')
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  @SetMetadata('aaa', 'admin')
  @UseGuards(AaaGuard)
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('hello')
  @Aaa('admin')
  @UseGuards(AaaGuard)
  getHello2(): string {
    return this.appService.getHello();
  }

  @Bbb('role', 'admin', 'user1')
  getHello3(): string {
    return this.appService.getHello();
  }

  @Get('hello4')
  getHello4(@Ccc() c: string): string {
    return c;
  }

  @Get('hello5')
  getHello5(@Headers('Accept') header1: string, @MyHeaders('Accept') header2: string) {
    console.log('header1==', header1)
    console.log('header2==', header2)
  }

  @Get('hello6')
  getHello6(@Query('aaa') aaa: string, @MyQuery('bbb') bbb: string) {
    console.log('aaa==', aaa)
    console.log('bbb==', bbb)
  }

  @Get('hello7')
  @SetMetadata('aaa', 'from-handler')
  @UseGuards(AaaGuard)
  getHello7(@Query('aaa', new ParseIntPipe()) aaa: string, @MyQuery('bbb', new ParseIntPipe()) bbb: string) {
    console.log('aaa==', aaa)
    console.log('bbb==', bbb)
  }
}
