import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';

@Injectable()
export class AaaGuard implements CanActivate {

  constructor(private reflector: Reflector){}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    console.log('guard');
    console.log('handle',this.reflector.get('roles',context.getHandler()));
    console.log('class',this.reflector.get('roles',context.getClass()));

    console.log('getAll',this.reflector.getAll('roles',[context.getHandler(),context.getClass()]));
    console.log('getAllAndMerge',this.reflector.getAllAndMerge('roles',[context.getHandler(),context.getClass()]));
    console.log('getAllAndOverride',this.reflector.getAllAndOverride('roles',[context.getHandler(),context.getClass()]));
    return true;
  }
}
