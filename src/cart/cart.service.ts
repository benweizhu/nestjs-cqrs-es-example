import { Injectable } from '@nestjs/common';
import { getCurrentStateOfCart } from './cart.aggregate';
import { buildAddItemToCartEvent, buildDeleteItemFromCartEvent, eventStorage } from './cart.event';
import { AddItemToCartCommand, Cart, DeleteItemFromCartCommand } from './cart.model';

@Injectable()
export class CartService {

  getCart(): Cart {
    const { cart } = getCurrentStateOfCart();
    return cart;
  }

  deleteItemFromCart(deleteItemFromCartCommand: DeleteItemFromCartCommand): Cart {
    const { cart, lastEventVersion } = getCurrentStateOfCart();
    cart.deleteCartItem(deleteItemFromCartCommand.name);
    eventStorage.store(buildDeleteItemFromCartEvent(cart, lastEventVersion, deleteItemFromCartCommand));
    return cart;
  }

  addItemToCart(addItemToCartCommand: AddItemToCartCommand): Cart {
    const { cart, lastEventVersion } = getCurrentStateOfCart();
    cart.addCartItem(addItemToCartCommand.name, addItemToCartCommand.price);
    eventStorage.store(buildAddItemToCartEvent(cart, lastEventVersion, addItemToCartCommand));
    return cart;
  }

}
