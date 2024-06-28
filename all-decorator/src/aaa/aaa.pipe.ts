import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class AaaPipe<T> implements PipeTransform {
  transform(value: T, metadata: ArgumentMetadata) {
    
  }
}
