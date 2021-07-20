import { Event, eventStorage } from "./cart.event";
import { handlerReducer } from "./cart.handler";
import { Cart } from "./cart.model";

function getLastEventVersion(events: Array<Event>) {
    if (events && events.length > 0) {
        return events[events.length - 1].eventVersion;
    }
    return 0;
}

export function getCurrentStateOfCart() {
    const events = eventStorage.query();
    const currentStateOfCart = events.reduce(handlerReducer, new Cart('7643234567123'));
    return {
        cart: currentStateOfCart,
        lastEventVersion: getLastEventVersion(events)
    };
}