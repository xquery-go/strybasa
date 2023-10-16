import {ITag} from "@/models/ITag";
import {ICategory} from "@/models/ICategory";

export interface IProduct {
    id: number,
    name: string,
    description: string,
    added: string,
    last_modified_date: string,
    price: number,
    count: number,
    product_image?: string,
    tags?: ITag[],
    category?: ICategory,
}