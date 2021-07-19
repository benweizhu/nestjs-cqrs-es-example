import { Body, Controller, Post } from '@nestjs/common';
import { toAddItemToCartCommand, toDeleteItemFromCartCommand } from './cart.mapper';
import { AddItemToCartRequest, DeleteItemFromCartCommand } from './cart.model';
import { CartService } from './cart.service';


@Controller()
export class CartController {

  constructor(private readonly cartService: CartService) { }

  @Post('/cart/add-item')
  addItemToCart(@Body() addItemToCartRequest: AddItemToCartRequest): number {
    const addItemToCartCommand = toAddItemToCartCommand(addItemToCartRequest);
    return this.cartService.addItemToCart(addItemToCartCommand);
  }

  @Post('/cart/delete-item')
  deleteItemFromCart(@Body() deleteItemFromCartRequest: DeleteItemFromCartCommand): number {
    const deleteItemFromCartCommand = toDeleteItemFromCartCommand(deleteItemFromCartRequest);
    return this.cartService.deleteItemFromCart(deleteItemFromCartCommand);
  }

}
