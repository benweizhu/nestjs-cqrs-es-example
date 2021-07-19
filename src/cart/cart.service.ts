import { Injectable } from '@nestjs/common';
import { AddItemToCartCommand, DeleteItemFromCartCommand } from './cart.model';

@Injectable()
export class CartService {

  deleteItemFromCart(deleteItemFromCartCommand: DeleteItemFromCartCommand): number {
    return deleteItemFromCartCommand.id;
  }

  addItemToCart(addItemToCartCommand: AddItemToCartCommand): number {
    return addItemToCartCommand.price;
  }

}
