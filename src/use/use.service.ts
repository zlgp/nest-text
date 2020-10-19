import { Injectable } from '@nestjs/common';

@Injectable()
export class UseService {
    getUseData(): string {
        return "111"
    }
}
