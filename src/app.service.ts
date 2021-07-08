import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getWorld(): string {
    return 'World Hello!'
  }
  getHello(): string {
    return 'Hello World!';
  }
}
