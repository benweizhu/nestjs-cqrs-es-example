import { AddItemToCartCommand, AddItemToCartRequest, DeleteItemFromCartCommand, DeleteItemFromCartRequest } from "./cart.model";

export function toAddItemToCartCommand(addItemToCartRequest: AddItemToCartRequest): AddItemToCartCommand {
    return {
        name: addItemToCartRequest.name,
        price: addItemToCartRequest.price
    }
}

export function toDeleteItemFromCartCommand(deleteItemFromCartRequest: DeleteItemFromCartRequest): DeleteItemFromCartCommand {
    return {
        name: deleteItemFromCartRequest.name,
    }
}