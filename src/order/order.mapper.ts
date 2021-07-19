import { CreateOrderCommand, CreateOrderRequest } from "./order.model";

export function toCreateOrderCommand(createOrderRequest: CreateOrderRequest): CreateOrderCommand {
    return {
        totalPrice: createOrderRequest.totalPrice,
        orderItems: createOrderRequest.orderItems
    }
}