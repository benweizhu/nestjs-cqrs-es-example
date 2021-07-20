import { Injectable } from '@nestjs/common';
import { getCartAggregate } from './cart.aggregate';
import { eventStorage } from './cart.event';
import { AddItemToCartCommand, Cart, DeleteItemFromCartCommand } from './cart.model';

@Injectable()
export class CartService {

  deleteItemFromCart(deleteItemFromCartCommand: DeleteItemFromCartCommand): Cart {
    const cart = getCartAggregate();
    const event = cart.deleteCartItem(deleteItemFromCartCommand.name);
    eventStorage.store(event);
    return cart;
  }

  addItemToCart(addItemToCartCommand: AddItemToCartCommand): Cart {
    const cart = getCartAggregate();
    const event = cart.addCartItem(addItemToCartCommand.name, addItemToCartCommand.price);
    eventStorage.store(event);
    return cart;
  }

}
