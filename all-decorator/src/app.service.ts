import { Inject, Injectable } from '@nestjs/common';
import { AaaService } from './aaa/aaa.service';

@Injectable()
export class AppService {

  @Inject(AaaService)
  private readonly aaaService: AaaService;
  getHello(): string {
    return 'Hello World!' + this.aaaService.findAll();
  }
}
