import { Injectable } from '@nestjs/common';
import { getCurrentStateOfCart } from './cart.state';
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

    const deleteItemFromCartEvent = buildDeleteItemFromCartEvent(cart, lastEventVersion, deleteItemFromCartCommand);
    eventStorage.store(deleteItemFromCartEvent);

    return cart;
  }

  addItemToCart(addItemToCartCommand: AddItemToCartCommand): Cart {
    const { cart, lastEventVersion } = getCurrentStateOfCart();

    cart.addCartItem(addItemToCartCommand.name, addItemToCartCommand.price);

    const addItemToCartEvent = buildAddItemToCartEvent(cart, lastEventVersion, addItemToCartCommand);
    eventStorage.store(addItemToCartEvent);

    return cart;
  }

}
