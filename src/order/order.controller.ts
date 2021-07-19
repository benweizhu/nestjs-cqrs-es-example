import { Body, Controller, Post } from '@nestjs/common';
import { OrderService } from './order.service';


export class CreateOrderRequest {
  name: string;
}

@Controller()
export class OrderController {
  constructor(private readonly orderService: OrderService) { }

  @Post('/orders')
  createOrder(@Body() createUserRequest: CreateOrderRequest): CreateOrderRequest {
    return this.orderService.createUser(createUserRequest)
  }

}
