export interface AddItemToCartRequest {
    name: string,
    price: number,
}

export interface AddItemToCartCommand {
    name: string,
    price: number,
}

export interface DeleteItemFromCartRequest {
    id: number,
}

export interface DeleteItemFromCartCommand {
    id: number,
}