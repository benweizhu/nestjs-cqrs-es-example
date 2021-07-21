import { Cart } from "./cart.aggregate";
import { Event, eventStorage } from "./cart.event";
import { projectorReducer } from "./cart.projector";

function getLastEventVersion(events: Array<Event>) {
    if (events && events.length > 0) {
        return events[events.length - 1].eventVersion;
    }
    return 0;
}

export function getCurrentStateOfCart() {
    const events = eventStorage.query();
    const lastEventVersion = getLastEventVersion(events);
    const currentStateOfCart = events.reduce(projectorReducer, new Cart('7643234567123', lastEventVersion));
    return {
        cart: currentStateOfCart
    };
}