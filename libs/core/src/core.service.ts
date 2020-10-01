import { Injectable } from '@nestjs/common';

@Injectable()
export class CoreService {
    coreStuff(): string {
        return "from down here"
    }
}
