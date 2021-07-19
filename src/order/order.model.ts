export interface CreateOrderRequest {
    totalPrice: number,
    orderItems: Array<CreateOrderItemRequest>,
}

export interface CreateOrderItemRequest {
    name: string,
}

export interface CreateOrderResponse {
    id: number,
}

export interface CreateOrderCommand {
    totalPrice: number,
    orderItems: Array<CreateOrderItemCommand>
}

export interface CreateOrderItemCommand {
    name: string,
}