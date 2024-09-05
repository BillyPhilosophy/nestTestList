import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { Request, Response } from 'express';
import { AaaException } from './AaaException';

@Catch(AaaException)
export class AaaFilter<T extends AaaException> implements ExceptionFilter {
  catch(exception: T, host: ArgumentsHost) {
    host;
    if (host.getType() === 'http') {
      const ctx = host.switchToHttp();
      const request = ctx.getRequest<Request>();
      const response = ctx.getResponse<Response>();
      response
        .status(500)
        .json({
          aaa: exception.aaa,
          bbb: exception.bbb
        })
    } else if(host.getType() === 'ws') {

    } else if(host.getType() === 'rpc') {

    }
  }
}
