import { AddItemToCartEvent, DeleteItemFromCartEvent } from "./cart.event";

export class Cart {

    id: string;
    items: Array<CartItem>;

    constructor(id: string) {
        this.id = id;
        this.items = [];
    }

    addCartItem(event: AddItemToCartEvent) {
        const { name, price } = event.eventData;
        this.items.push(new CartItem(name, price));
    }

    deleteCartItem(event: DeleteItemFromCartEvent) {
        this.validateDeleteCartItem();

        const { name } = event.eventData

        const indexOfFoundItem = this.items.findIndex((item) =>
            name === item.name
        );
        
        if (indexOfFoundItem > -1) {
            this.items.splice(indexOfFoundItem, 1);
        }
    }

    private validateDeleteCartItem() {
        if (this.items.length < 1) {
            throw new Error(`Nothing to delete in cart`);
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