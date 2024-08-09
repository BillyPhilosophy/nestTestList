import { Body, Controller, Get, HttpException, HttpStatus, Param, ParseArrayPipe, ParseBoolPipe, ParseEnumPipe, ParseFloatPipe, ParseIntPipe, Post, Query, ValidationPipe } from '@nestjs/common';
import { AppService } from './app.service';
import { Ooo } from './dto/ooo.dto';
import { MyValidationPipe } from './my-validation.pipe';
import { Ppp } from './dto/ppp.dto';

enum Ggg  {
  AAA = '111',
  BBB = '222',
  CCC = '333'
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(@Query('aa', new ParseIntPipe({
    exceptionFactory: (msg) => {
      console.log(msg)
      throw new HttpException('自定义异常' + msg, HttpStatus.NOT_IMPLEMENTED)
    }
  })) aa: string): string {
    return aa + 1;
  }

  @Get('cc')
  cc(@Query('cc', ParseFloatPipe) cc: number) {
    return cc + 1
  }

  @Get('dd')
  dd(@Query('dd', ParseBoolPipe) dd: boolean) {
    return typeof dd
  }

  @Get('ee')
  ee(@Query('ee', new ParseArrayPipe({ items: ParseIntPipe })) ee: Array<number>) {
    return ee.reduce((acc, cur) => acc + cur, 0)
  }

  @Get('ff')
  ff(@Query('ff', new ParseArrayPipe({ separator:'..', optional:true })) ff: Array<string>) {
    return ff
  }

  @Get('gg/:enum')
  gg(@Param('enum', new ParseEnumPipe(Ggg)) gg: Ggg) {
    return gg
  }

  @Post('ooo')
  ooo(@Body(MyValidationPipe) obj: Ooo) {
    console.log(obj);
    return obj
  }

  @Post('ppp')
  ppp(@Body() obj: Ppp) {
    console.log(obj);
    return obj
  }
}
