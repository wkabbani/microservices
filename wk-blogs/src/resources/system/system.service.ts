import { Injectable } from '@nestjs/common';

@Injectable()
export class SystemService {
  getHello(): string {
    return 'Hello World!';
  }
}
