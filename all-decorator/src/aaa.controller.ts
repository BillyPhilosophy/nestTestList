import { Controller, Get, Header, HostParam, HttpCode, Next, Redirect, Render, Req, Res } from '@nestjs/common';
import { Response, Request, NextFunction } from 'express';

@Controller({ path: 'aaa', host: ':host.0.0.1' })
export class AaaController {
    @Get('bbb')
    hello(@HostParam('host') host: string) {
        return host;
    }
    
    @Get('ccc')
    ccc(@Req() req: Request){
        console.log(req.url);
        console.log(req.hostname);
    }

    @Get('ddd')
    ddd(@Res() res: Response){
        res.send('ddd');
    }

    @Get('ddd2')
    ddd2(@Res({passthrough:true}) res: Response){
        return 'ddd2'
    }

    @Get('eee')
    eee(@Next() next: NextFunction){
        console.log('eee-handler1');
        next();
        return '111'
    }
    @Get('eee')
    eee2(){
        console.log('eee-handler2');
        return 'eee'
    }

    @Get('fff')
    @HttpCode(222) 
    fff(){
        return 'fff'
    }

    @Get('ggg')
    @Header('aaa','bbb')
    ggg(){
        return 'ggg'
    }

    @Get('hhh')
    @Redirect('https://www.baidu.com', 301)
    hhh(){
        return 'hhh'
    }

    @Get('xxx')
    @Redirect()
    xxx(){
        return {
            url:'https://www.baidu.com', statusCode:301
        }
    }

    @Get('user')
    @Render('user')
    getUser(){
        return {
            name: 'user',
            age:18
        }
    }
}
