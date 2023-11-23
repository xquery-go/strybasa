import {ProductsData} from "@/data/ProductsData";
import {IProduct} from "@/models/IProduct";

export const useProduct = (id: string | number) => {
    const product = ProductsData.filter((product: IProduct) => String(product.product_id) == id)[0]
    return product as IProduct;
};