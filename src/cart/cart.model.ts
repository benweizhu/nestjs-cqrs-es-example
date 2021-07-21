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