import { applyDecorators, Controller, SetMetadata } from '@nestjs/common';

export const Ddd = (path: string = 'ddd', metadata: string | string[] = 'from-class') => {
    return applyDecorators(
        SetMetadata(path, metadata),
        Controller(path),
    );
};
