import { Body, Controller, Get, Post } from '@nestjs/common';
import { Cart } from './cart.aggregate';
import { Event, eventStorage } from './cart.event';
import { toAddItemToCartCommand, toDeleteItemFromCartCommand } from './cart.mapper';
import { AddItemToCartRequest, DeleteItemFromCartCommand } from './cart.model';
import { CartService } from './cart.service';


@Controller()
export class CartController {

  constructor(private readonly cartService: CartService) { }

  @Post('/cart/add-item')
  addItemToCart(@Body() addItemToCartRequest: AddItemToCartRequest): number {
    const addItemToCartCommand = toAddItemToCartCommand(addItemToCartRequest);
    return this.cartService.addItemToCart(addItemToCartCommand).items.length;
  }

  @Post('/cart/delete-item')
  deleteItemFromCart(@Body() deleteItemFromCartRequest: DeleteItemFromCartCommand): number {
    const deleteItemFromCartCommand = toDeleteItemFromCartCommand(deleteItemFromCartRequest);
    return this.cartService.deleteItemFromCart(deleteItemFromCartCommand).items.length;
  }

  @Get('/cart')
  getCart(): Cart {
    return this.cartService.getCart();
  }

  @Get('/events')
  getEvents(): Array<Event> {
    return eventStorage.query();
  }

}
