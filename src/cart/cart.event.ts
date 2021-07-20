export interface Event {
    aggregateRootId: string;
    aggregateRootType: string;
    eventVersion: number;
    eventTime: string;
    commandId: number;
    commandType: string;
    commandTime: string;
}

export interface DeleteItemFromCartEvent extends Event {
    eventData: {

    }
}

export function buildDeleteItemFromCartEvent(): DeleteItemFromCartEvent {
    return {
        aggregateRootId: '',
        aggregateRootType: 'string',
        eventVersion: 0,
        eventTime: 'string',
        commandId: 0,
        commandType: '',
        eventData: {},
        commandTime: 'string'
    }
}

export interface AddItemToCartEvent extends Event {
    eventData: {

    }
}

export function buildAddItemToCartEvent(): AddItemToCartEvent {
    return {
        aggregateRootId: '',
        aggregateRootType: 'string',
        eventVersion: 0,
        eventTime: 'string',
        commandId: 0,
        commandType: '',
        eventData: {},
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