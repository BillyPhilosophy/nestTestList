import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { Response } from 'express';

@Catch()
export class TestFilter<T extends { message: string }> implements ExceptionFilter {
  catch(exception: T, host: ArgumentsHost) {
    const response: Response = host.switchToHttp().getResponse();
    response.status(400).json({
      statusCode: 400,
      message: 'test: ' + exception.message
    })
  }
}