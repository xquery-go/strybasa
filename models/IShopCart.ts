import {IProduct} from "@/models/IProduct";

export interface IShopCartProduct {

}
export interface IShopCart {
    product: IProduct,
    amount: number,
    total_price: number | string,
}
