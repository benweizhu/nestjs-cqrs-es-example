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

const events =