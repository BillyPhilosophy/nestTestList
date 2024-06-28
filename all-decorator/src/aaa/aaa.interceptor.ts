import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable, tap } from 'rxjs';

@Injectable()
export class AaaInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log(context.getClass());//控制器执行之前触发
    return next.handle().pipe(
      tap(()=>{
        console.log('AaaInterceptor');//控制器执行之后触发
      })
    );
  }
}
