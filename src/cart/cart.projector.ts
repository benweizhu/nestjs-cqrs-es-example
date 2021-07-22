import { Cart } from "./cart.aggregate";
import { AddItemToCartEvent, DeleteItemFromCartEvent, Event, eventStorage } from "./cart.event"

export function getCurrentStateOfCart() {
    const events = eventStorage.query();
    const currentStateOfCart = events.reduce(projectorReducer, new Cart('7643234567123', getLastEventVersion(events)));
    return {
        cart: currentStateOfCart
    };
}

function getLastEventVersion(events: Array<Event>) {
    if (events && events.length > 0) {
        return events[events.length - 1].eventVersion;
    }
    return 0;
}

const projectorsByEventType = {
    deleteItemFromCart: (cart: Cart, event: DeleteItemFromCartEvent) => { cart.onDeleteItemFromCartEvent(event); return cart },
    addItemToCart: (cart: Cart, event: AddItemToCartEvent) => { cart.onAddItemToCartEvent(event); return cart },
}

function projectorReducer(cart: Cart, event: Event) {
    const projectEvent = projectorsByEventType[event.eventType];
    if (!projectEvent) {
        throw new Error(`Event handler not found for event ${event.eventType}`)
    }
    return projectEvent(cart, event)
};