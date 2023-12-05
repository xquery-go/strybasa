import {ITag} from "@/models/ITag";
import {ICategory} from "@/models/ICategory";

export interface IProduct {
    product_id: number,
    name: string,
    description: string,
    date_joined: string,
    last_modified_date: string,
    price: number,
    metric: string,
    quantity: number,
    product_image: string,
    tags?: number[],
    categories?: number[],
}