import { eventStorage } from "./cart.event";
import { handlerReducer } from "./cart.handler";
import { Cart } from "./cart.model";

export function getCurrentStateOfCart() {
    const events = eventStorage.query();
    const currentStateOfCart = events.reduce(handlerReducer, new Cart('7643234567123'));
    return {
        cart: currentStateOfCart,
        lastEventVersion: 1
    };
}