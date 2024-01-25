import {IProduct} from "@/models/IProduct";

export const Filter = (product: IProduct, categoryFilter: number | null, tagFilter: number | null) => {
    if(categoryFilter && product.categories && !(product.categories.includes(categoryFilter))) {
        return false;
    }
    if(tagFilter && product.tags && !(product.tags.includes(tagFilter))) {
        return false;
    }
    return true;
}