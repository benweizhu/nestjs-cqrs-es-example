import { Event } from "./cart.event"
import { Cart } from "./cart.model"

function projectDeleteItemFromCartEvent(cart: Cart, event: Event): Cart {
    return cart;
};

function projectAddItemToCartEvent(cart: Cart, event: Event): Cart {
    return cart;
};

const projectors = {
    deleteItemFromCart: projectDeleteItemFromCartEvent,
    addItemToCart: projectAddItemToCartEvent
}

export function projectorReducer(cart: Cart, event: Event) {
    const projectEvent = projectors[event.eventType];
    if (!projectEvent) {
        throw new Error(`Event handler not found for event ${event.eventType}`)
    }
    return projectEvent(cart, event)
};