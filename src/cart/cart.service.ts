import { Injectable } from '@nestjs/common';
import { AddItemToCartCommand } from './cart.model';

@Injectable()
export class CartService {

  addItemToCart(addItemToCartCommand: AddItemToCartCommand): number {
    return addItemToCartCommand.price;
  }

}
