import { Cart } from "./cart.model";

const cart = new Cart();

export function getCartAggregate(): Cart {
    return cart;
}