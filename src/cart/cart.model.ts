export interface AddItemToCartRequest {
    name: string,
    price: number,
}

export interface AddItemToCartCommand {
    name: string,
    price: number,
}

export interface DeleteItemFromCartRequest {
    name: string,
}

export interface DeleteItemFromCartCommand {
    name: string,
}

export class Cart {

    items: Array<CartItem>;

    constructor() {
        this.items = [];
    }

    addCartItem(name: string, price: number) {
        this.items.push(new CartItem(name, price));
    }

    deleteCartItem(name: string) {
        const found = this.items.findIndex((item) =>
            name === item.name
        );
        if (found > -1) {
            this.items.splice(found, 1);
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