import { Event } from "./cart.event"
import { Cart } from "./cart.model"

function handleDeleteItemFromCartEvent(cart: Cart, event: Event): Cart {
    return cart;
};

function handleAddItemToCartEvent(cart: Cart, event: Event): Cart {
    return cart;
};

const handlers = {
    deleteItemFromCart: handleDeleteItemFromCartEvent,
    addItemToCart: handleAddItemToCartEvent
}

export function handlerReducer(cart: Cart, event: Event) {
    const handler = handlers[event.eventType];
    if (!handler) {
        throw new Error(`Event handler not found for event ${event.eventType}`)
    }
    return handler(cart, event)
};