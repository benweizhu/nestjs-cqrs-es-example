import { AddItemToCartCommand, Cart, DeleteItemFromCartCommand } from "./cart.model";

export interface Event {
    aggregateRootId: string;
    aggregateRootType: string;
    eventVersion: number;
    eventTime: string;
    eventData: {},
    commandType: string;
    commandData: {};
    commandTime: string;
}

export function buildDeleteItemFromCartEvent(cart: Cart, lastEventVersion: number, command: DeleteItemFromCartCommand): Event {
    return {
        aggregateRootId: cart.id,
        aggregateRootType: 'Cart',
        eventVersion: lastEventVersion + 1,
        eventTime: new Date().toUTCString(),
        eventData: {},
        commandType: 'DeleteItemFromCart',
        commandData: command,
        commandTime: 'string'
    }
}

export function buildAddItemToCartEvent(cart: Cart, lastEventVersion: number, command: AddItemToCartCommand): Event {
    return {
        aggregateRootId: cart.id,
        aggregateRootType: 'Cart',
        eventVersion: lastEventVersion + 1,
        eventTime: new Date().toUTCString(),
        eventData: {},
        commandType: 'AddItemToCart',
        commandData: command,
        commandTime: 'string'
    }
}

class EventStorage {

    events: Array<Event>

    constructor() {
        this.events = []
    }

    store(event: Event) {
        // Check event version
        this.events.push(event);
    }

    query(): Array<Event> {
        return this.events;
    }

}

export const eventStorage = new EventStorage();