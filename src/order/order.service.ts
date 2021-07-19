import { Injectable } from '@nestjs/common';
import { CreateOrderCommand } from './order.model';

@Injectable()
export class OrderService {

  createUser(createOrderCommand: CreateOrderCommand): number {
    return createOrderCommand.totalPrice;
  }

}
