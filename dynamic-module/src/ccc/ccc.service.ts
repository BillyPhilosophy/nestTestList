import { Injectable } from '@nestjs/common';

@Injectable()
export class CccService {
    findAll() {
        return `This action returns all ccc`;
    }
}
