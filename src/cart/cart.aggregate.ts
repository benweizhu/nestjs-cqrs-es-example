import { AddItemToCartEvent, buildAddItemToCartEvent, buildDeleteItemFromCartEvent, DeleteItemFromCartEvent } from "./cart.event";
import { AddItemToCartCommand, DeleteItemFromCartCommand } from "./cart.model";

export class EventAggregate {

    eventVersion: number;

    constructor(eventVersion: number) {
        this.eventVersion = eventVersion;
    }

}

export class Cart extends EventAggregate {

    id: string;
    items: Array<CartItem>;

    constructor(id: string, eventVersion: number) {
        super(eventVersion);
        this.id = id;
        this.items = [];
    }

    addItemToCart(command: AddItemToCartCommand): AddItemToCartEvent {
        const event = AddItemToCartEvent.build(this, command);

        this.onAddItemToCartEvent(event);

        return event;
    }

    deleteCartItem(command: DeleteItemFromCartCommand): DeleteItemFromCartEvent {
        if (this.items.length < 1) {
            throw new Error(`Nothing to delete in cart`);
        }

        const event = DeleteItemFromCartEvent.build(this, command);

        this.onDeleteItemFromCartEvent(event);

        return event;
    }

    onAddItemToCartEvent(event: AddItemToCartEvent) {
        const { name, price } = event.eventData;
        this.items.push(new CartItem(name, price));
    }

    onDeleteItemFromCartEvent(event: DeleteItemFromCartEvent) {
        const { name } = event.eventData

        const indexOfFoundItem = this.items.findIndex((item) =>
            name === item.name
        );

        if (indexOfFoundItem > -1) {
            this.items.splice(indexOfFoundItem, 1);
        }
    }

}

export class CartItem {

    name: string;
    price: number;

    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }

}