import { ObjectId } from "mongoose";
import { Request } from "express";
import { Session } from "express-session"
import { OrderStatus } from "../enums/order.enum";


export interface OrderOrderItem {
    _id: ObjectId;
    itemQuantity: number;
    itemPrice: number;
    orderId: ObjectId;
    productId: ObjectId;
    createdAt: Date;
    updatedAt: Date;
}

export interface Order {
    _id: ObjectId;
    orderTotal: number;
    orderDelivery: number;
    orderStatus: OrderStatus;
    memberId: ObjectId;
    createdAt: Date;
    updatedAt: Date;
}

export interface OrderItemInput {
    itemQuantity : number;
    itemPrice: number;
    productId: ObjectId;
    orderId?: ObjectId;
}