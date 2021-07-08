import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  createUser(body: any): string {
    return body;
  }

  findUserById(id: number): string {
    return `Find user with id ${id}`
  }

  getHello(): string {
    return 'Hello World!';
  }

}
