import { Injectable } from '@nestjs/common';
import { getCartAggregate } from './cart.aggregate';
import { AddItemToCartCommand, Cart, DeleteItemFromCartCommand } from './cart.model';

@Injectable()
export class CartService {

  deleteItemFromCart(deleteItemFromCartCommand: DeleteItemFromCartCommand): Cart {
    const cart = getCartAggregate();
    cart.deleteCartItem(deleteItemFromCartCommand.name)
    return cart;
  }

  addItemToCart(addItemToCartCommand: AddItemToCartCommand): Cart {
    const cart = getCartAggregate();
    cart.addCartItem(addItemToCartCommand.name, addItemToCartCommand.price);
    console.log(cart);
    return cart;
  }

}
