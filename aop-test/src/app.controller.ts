import { Controller, Get, ParseIntPipe, Query, UseGuards, UseInterceptors, BadRequestException, UseFilters } from '@nestjs/common';
import { AppService } from './app.service';
import { LoginGuard } from './login.guard';
import { TimeInterceptor } from './time.interceptor';
import { ValidatePipe } from './validate.pipe';
import { TestFilter } from './test.filter';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    console.log('-----handler.....');
    return this.appService.getHello();
  }

  @Get('aaa')
  @UseGuards(LoginGuard)
  aaa(): string {
    console.log('aaa...');
    return 'aaa'
  }

  @Get('bbb')
  @UseInterceptors(TimeInterceptor)
  bbb(): string {
    console.log('bbb...');
    return 'bbb'
  }

  @Get('ccc')
  @UseFilters(TestFilter<BadRequestException>)
  ccc(@Query('num',ValidatePipe) num: number): number {
    console.log('ccc...');
    return num + 1
  }

}
