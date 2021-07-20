import { Cart } from "./cart.model";

const cart = new Cart('7643234567123');

export function getCartAggregate() {
    return {
        cart,
        lastEventVersion: 1
    };
}