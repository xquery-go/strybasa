import {useQuery} from "react-query";
import axios from "axios";
import {ICategory} from "@/models/ICategory";

export const useCategories = () => {
    const { data, isLoading, isSuccess, error } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const data = await axios.get(
                'http://127.0.0.1/api/categories/?format=json'
            );
            return data.data.results as ICategory[];
        },
    });
    console.log(`BREAKPOINT FROM USE CATEGORIES`, data)

    return { data, isLoading, isSuccess, error };
};