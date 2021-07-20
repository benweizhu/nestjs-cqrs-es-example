import { AddItemToCartCommand, Cart, DeleteItemFromCartCommand } from "./cart.model";

export interface Event {
    aggregateRootId: string;
    aggregateRootType: string;
    eventVersion: number;
    eventType: string;
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
        eventTime: new Date().toISOString(),
        eventData: {},
        eventType: 'deleteItemFromCart',
        commandType: 'deleteItemFromCart',
        commandData: command,
        commandTime: 'string'
    }
}

export function buildAddItemToCartEvent(cart: Cart, lastEventVersion: number, command: AddItemToCartCommand): Event {
    return {
        aggregateRootId: cart.id,
        aggregateRootType: 'Cart',
        eventVersion: lastEventVersion + 1,
        eventTime: new Date().toISOString(),
        eventData: {},
        eventType: 'addItemToCart',
        commandType: 'addItemToCart',
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
        this.events.push(event);
    }

    query(): Array<Event> {
        return this.events;
    }

}

export const eventStorage = new EventStorage();