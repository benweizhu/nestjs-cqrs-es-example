import { AddItemToCartCommand, AddItemToCartRequest } from "./cart.model";

export function toAddItemToCartCommand(addItemToCartRequest: AddItemToCartRequest): AddItemToCartCommand {
    return {
        name: addItemToCartRequest.name,
        price: addItemToCartRequest.price
    }
}