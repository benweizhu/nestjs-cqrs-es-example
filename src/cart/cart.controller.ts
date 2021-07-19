import { Body, Controller, Post } from '@nestjs/common';
import { toAddItemToCartCommand } from './cart.mapper';
import { AddItemToCartRequest } from './cart.model';
import { CartService } from './cart.service';


@Controller()
export class CartController {

  constructor(private readonly cartService: CartService) { }

  @Post('/cart')
  addItemToCart(@Body() addItemToCartRequest: AddItemToCartRequest): number {
    const addItemToCartCommand = toAddItemToCartCommand(addItemToCartRequest);
    return this.cartService.addItemToCart(addItemToCartCommand);
  }

}
