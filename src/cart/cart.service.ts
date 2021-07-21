import { Injectable } from '@nestjs/common';
import { getCurrentStateOfCart } from './cart.state';
import { eventStorage } from './cart.event';
import { AddItemToCartCommand, DeleteItemFromCartCommand } from './cart.model';
import { Cart } from './cart.aggregate';

@Injectable()
export class CartService {

  getCart(): Cart {
    const { cart } = getCurrentStateOfCart();
    return cart;
  }

  deleteItemFromCart(deleteItemFromCartCommand: DeleteItemFromCartCommand): Cart {
    const { cart } = getCurrentStateOfCart();

    const deleteItemFromCartEvent = cart.deleteCartItem(deleteItemFromCartCommand);

    eventStorage.store(deleteItemFromCartEvent);

    return cart;
  }

  addItemToCart(addItemToCartCommand: AddItemToCartCommand): Cart {
    const { cart } = getCurrentStateOfCart();

    const addItemToCartEvent = cart.addItemToCart(addItemToCartCommand);

    eventStorage.store(addItemToCartEvent);

    return cart;
  }

}
