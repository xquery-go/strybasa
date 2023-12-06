import {useQuery} from "react-query";
import axios from "axios";

export const useShopCart = () => {
    const { data, isLoading, isSuccess, error } = useQuery({
        queryKey: ['shop_cart'],
        queryFn: async () => {
            const data = await axios.get(
                'http://127.0.0.1/api/cart/?format=json'
            );
            if("errors" in data.data) {}
            return data.data.results;
        },
    });
    console.log(`BREAKPOINT FROM USE CATEGORIES`, data)
    return { data, isLoading, isSuccess, error };
};