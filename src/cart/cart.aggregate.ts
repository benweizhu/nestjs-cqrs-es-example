import { eventStorage } from "./cart.event";
import { handlerReducer } from "./cart.handler";
import { Cart } from "./cart.model";

const cart = new Cart('7643234567123');

export function getCartAggregate() {
    const events = eventStorage.query();
    events.reduce(handlerReducer, cart)
    return {
        cart,
        lastEventVersion: 1
    };
}