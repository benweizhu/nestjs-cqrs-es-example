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
}

export class AddItemToCartEvent extends Event {

    eventData: {
        name: string,
        price: number
    }

    private constructor(cart: Cart, command: AddItemToCartCommand) {
        super();
        this.aggregateRootId = cart.id;
        this.aggregateRootType = 'Cart';
        this.eventVersion = cart.eventVersion + 1;
        this.eventTime = new Date().toISOString();
        this.eventData = {
            name: command.name,
            price: command.price
        };
        this.eventType = 'addItemToCart';
        this.commandType = 'addItemToCart';
        this.commandData = command;
        this.commandTime = new Date().toISOString();
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
        super();
        this.aggregateRootId = cart.id;
        this.aggregateRootType = 'Cart';
        this.eventVersion = cart.eventVersion + 1;
        this.eventTime = new Date().toISOString();
        this.eventData = {
            name: command.name
        };
        this.eventType = 'deleteItemFromCart';
        this.commandType = 'deleteItemFromCart';
        this.commandData = command;
        this.commandTime = new Date().toISOString();
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