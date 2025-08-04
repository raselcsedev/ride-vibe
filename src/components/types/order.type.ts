import { order_status, paymentMethod } from "../constant/order.const";


export type TOrderStatus = typeof order_status[number]
export interface IOrderedProduct {
    product:any;
    quantity: number;
    name: string;
    price: number;
}
export interface IOrder {
    _id: string;
    products: IOrderedProduct[];
    status: TOrderStatus;
    paymentMethod: typeof paymentMethod[number];
    payment?: number;
    address: string;
    name: string;
    email?: string;
    contact: string;
    totalPrice: number;
    createdAt: Date;
    updatedAt: Date;
    transactionId?: string;
    paidStatus: boolean;
    deliveryCharge: number;
}

export type OrderDataType = {
    products: {
        product: string;
        quantity: number;
        name: string;
    }[];
    payment: number;
    address: string;
    name: string;
    contact: string;
    email?: string;
    paymentMethod: typeof paymentMethod[number];
}