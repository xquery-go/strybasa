import {IUser} from "@/models/IUser";
import {IShopCartProduct} from "@/models/IShopCartProduct";

export interface IOrder {
    id: number,
    user: IUser,
    order_number: string,
    status: string,
    order_comment?: string,
    order_time: string,
    items: IShopCartProduct[],
    to_pay: string,
    signer_firstname: string,
    signer_lastname: string,
    signer_address: string
}