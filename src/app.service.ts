import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  findUserById(id: number): string {
    return `Find user with id ${id}`
  }

  getHello(): string {
    return 'Hello World!';
  }
  
}
