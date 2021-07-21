import { Cart } from "./cart.aggregate";
import { AddItemToCartEvent, DeleteItemFromCartEvent, Event } from "./cart.event"

const projectors = {
    deleteItemFromCart: (cart: Cart, event: DeleteItemFromCartEvent) => { cart.deleteCartItem(event); return cart },
    addItemToCart: (cart: Cart, event: AddItemToCartEvent) => { cart.addCartItem(event); return cart },
}

export function projectorReducer(cart: Cart, event: Event) {
    const projectEvent = projectors[event.eventType];
    if (!projectEvent) {
        throw new Error(`Event handler not found for event ${event.eventType}`)
    }
    return projectEvent(cart, event)
};