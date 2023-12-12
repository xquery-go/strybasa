import {IProduct} from "@/models/IProduct";

export interface IShopCartProduct {
    product: IProduct,
    amount: number,
    total_price: number | string,
    user_total_price: number | string,
}