import { Body, Controller, Post } from '@nestjs/common';
import { toCreateOrderCommand } from './order.mapper';
import { CreateOrderRequest } from './order.model';
import { OrderService } from './order.service';


@Controller()
export class OrderController {
  constructor(private readonly orderService: OrderService) { }

  @Post('/orders')
  createOrder(@Body() createUserRequest: CreateOrderRequest): number {
    const createOrderRequest = toCreateOrderCommand(createUserRequest);
    return this.orderService.createUser(createOrderRequest)
  }

}
