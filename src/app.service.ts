import { Injectable } from '@nestjs/common';
import { CreateUserRequest } from './app.controller';

@Injectable()
export class AppService {

  createUser(createUserRequest: CreateUserRequest): CreateUserRequest {
    return createUserRequest;
  }

  findUserById(id: number): string {
    return `Finds user with id ${id}`
  }

  getHello(): string {
    return 'Hello World!';
  }

}
