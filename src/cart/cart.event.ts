import { Cart } from "./cart.aggregate";
import { AddItemToCartCommand, DeleteItemFromCartCommand } from "./cart.model";

export class Event {
    aggregateRootId: string;
    aggregateRootType: string;
    eventVersion: number;
    eventType: string;
    eventTime: string;
    eventData: {};
    commandType: string;
    commandData: {};
    commandTime: string;

    constructor(commandData, aggreateRoot) {
        this.eventTime = new Date().toISOString();
        this.commandTime = new Date().toISOString();
        this.commandData = commandData;
        this.aggregateRootId = aggreateRoot.id;
        this.eventVersion = aggreateRoot.eventVersion + 1;
    }
}

export class AddItemToCartEvent extends Event {

    eventData: {
        name: string,
        price: number
    }

    private constructor(cart: Cart, command: AddItemToCartCommand) {
        super(command, cart);
        this.aggregateRootType = 'Cart';
        this.eventData = {
            name: command.name,
            price: command.price
        };
        this.eventType = 'addItemToCart';
        this.commandType = 'addItemToCart';
    }

    static build(cart: Cart, command: AddItemToCartCommand): AddItemToCartEvent {
        return new AddItemToCartEvent(cart, command);
    }
}

export class DeleteItemFromCartEvent extends Event {

    eventData: {
        name: string
    }

    private constructor(cart: Cart, command: DeleteItemFromCartCommand) {
        super(command, cart);
        this.aggregateRootType = 'Cart';
        this.eventData = {
            name: command.name
        };
        this.eventType = 'deleteItemFromCart';
        this.commandType = 'deleteItemFromCart';
    }

    static build(cart: Cart, command: DeleteItemFromCartCommand): DeleteItemFromCartEvent {
        return new DeleteItemFromCartEvent(cart, command);
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