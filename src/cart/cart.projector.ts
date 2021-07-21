import { Cart } from "./cart.aggregate";
import { AddItemToCartEvent, DeleteItemFromCartEvent, Event } from "./cart.event"

const projectorsByEventType = {
    deleteItemFromCart: (cart: Cart, event: DeleteItemFromCartEvent) => { cart.onDeleteItemFromCartEvent(event); return cart },
    addItemToCart: (cart: Cart, event: AddItemToCartEvent) => { cart.onAddItemToCartEvent(event); return cart },
}

export function projectorReducer(cart: Cart, event: Event) {
    const projectEvent = projectorsByEventType[event.eventType];
    if (!projectEvent) {
        throw new Error(`Event handler not found for event ${event.eventType}`)
    }
    return projectEvent(cart, event)
};