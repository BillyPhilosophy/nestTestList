import { Body, Controller, Get, Header, HttpException, HttpStatus, Inject, Optional, Param, ParseBoolPipe, ParseIntPipe, Post, Query, SetMetadata, UseFilters, UseGuards, UseInterceptors, UsePipes, Headers, Ip, Session } from '@nestjs/common';
import { AppService } from './app.service';
import { AaaFilter } from './aaa/aaa.filter';
import { AaaGuard } from './aaa/aaa.guard';
import { AaaInterceptor } from './aaa/aaa.interceptor';
import { AaaDto } from './aaa/dto/create-aaa.dto';

@Controller()
@SetMetadata('roles', ['user'])
export class AppController {
  constructor(@Optional() private readonly appService: AppService) { }//构造器注入
  // @Inject(AppService) //属性装饰器注入 token 
  // private readonly appService: AppService;
  @Optional() //没有对应的 provider 亦可以正常创建对象
  @Inject('dgc')
  private readonly dgc: Record<string, any>

  @Get()
  @SetMetadata('roles', ['admin'])
  @UseGuards(AaaGuard)
  @UseInterceptors(AaaInterceptor)
  @UseFilters(AaaFilter)
  // @UsePipes(ParseIntPipe)
  getHello(): string {
    console.log(this.dgc);
    throw new HttpException('xxxx', HttpStatus.BAD_REQUEST)
    return this.appService.getHello() + this.dgc?.name;
  }

  @Get('/ccc')
  header(@Headers('Accept') accept: string, @Headers() header: Record<string, any>) {
    console.log('accept', accept);
    console.log('header', header);
  }

  @Get('/ip')
  getIp(@Ip() ip: string) {
    console.log(ip);
  }

  @Get('/session')
  getSession(@Session() session) {
    if (!session.count) {
      session.count = 0
    }
    session.count = session.count + 1;
    return session.count
  }

  @Get('/xxx/:aaa')//大多数的pipes用于参数中而不是直接@UsePipes
  getHello2(@Param('aaa', ParseIntPipe) a: number, @Query('bbb', ParseBoolPipe) b: boolean): string {
    return `hello~ Param: ${a} - Query: ${b}`
  }

  @Post('/bbb')
  postMsg(@Body() msg: AaaDto): string {
    console.log('test');
    return JSON.stringify(msg)
  }
}
