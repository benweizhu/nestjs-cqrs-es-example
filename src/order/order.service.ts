import { Injectable } from '@nestjs/common';
import { CreateOrderRequest } from './order.controller';

@Injectable()
export class OrderService {

  createUser(createUserRequest: CreateOrderRequest): CreateOrderRequest {
    return createUserRequest;
  }

}
