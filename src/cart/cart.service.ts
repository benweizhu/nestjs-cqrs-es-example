import { Injectable } from '@nestjs/common';
import { getCurrentStateOfCart } from './cart.state';
import { buildAddItemToCartEvent, buildDeleteItemFromCartEvent, eventStorage } from './cart.event';
import { AddItemToCartCommand, DeleteItemFromCartCommand } from './cart.model';
import { Cart } from './cart.aggregate';

@Injectable()
export class CartService {

  getCart(): Cart {
    const { cart } = getCurrentStateOfCart();
    return cart;
  }

  deleteItemFromCart(deleteItemFromCartCommand: DeleteItemFromCartCommand): Cart {
    const { cart, lastEventVersion } = getCurrentStateOfCart();

    const deleteItemFromCartEvent = buildDeleteItemFromCartEvent(cart, lastEventVersion, deleteItemFromCartCommand);

    cart.deleteCartItem(deleteItemFromCartEvent);

    eventStorage.store(deleteItemFromCartEvent);

    return cart;
  }

  addItemToCart(addItemToCartCommand: AddItemToCartCommand): Cart {
    const { cart, lastEventVersion } = getCurrentStateOfCart();

    const addItemToCartEvent = buildAddItemToCartEvent(cart, lastEventVersion, addItemToCartCommand);

    cart.addCartItem(addItemToCartEvent);

    eventStorage.store(addItemToCartEvent);

    return cart;
  }

}
