import {ProductsData} from "@/data/ProductsData";
import {IProduct} from "@/models/IProduct";
import {useQuery} from "react-query";
import axios from "axios";

const Filter = (product: IProduct, categoryFilter: number | null, tagFilter: number | null) => {
    if(categoryFilter && product.categories && !(product.categories.includes(categoryFilter))) {
        return false;
    }
    if(tagFilter && product.tags && !(product.tags.includes(tagFilter))) {
        return false;
    }
    return true;
}

export const useProducts = (categoryFilter: number | null, tagFilter: number | null) => {
    let { data, isLoading, isSuccess, error } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const data = await axios.get(
                'http://127.0.0.1/api/products/?format=json'
            );
            console.log(`BREAKPOINT FROM USE PRODUCTS categoryFilter: ${categoryFilter} and tagFilter: ${tagFilter}`, data.data.results)
            return data.data as IProduct[];
        },
    });
    data = data?.filter((product: IProduct) => Filter(product, categoryFilter, tagFilter))
    return { data, isLoading, isSuccess, error };
};

export const useProduct = (id: string | number) => {
    let { data, isLoading, isSuccess, error } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const data = await axios.get(
                `http://127.0.0.1/api/products/${String(id)}/?format=json`,
            );
            return data.data as IProduct;
        },
    });
    return { data, isLoading, isSuccess, error };
};