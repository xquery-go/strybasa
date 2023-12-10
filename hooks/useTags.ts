import {useQuery} from "react-query";
import axios from "axios";
import {ITag} from "@/models/ITag";

export const useTags = () => {
    const { data, isLoading, isSuccess, error } = useQuery({
        queryKey: ['tags'],
        queryFn: async () => {
            const data = await axios.get(
                'http://127.0.0.1/api/tags/?format=json'
            );
            return data.data as ITag[];
        },
    });
    return { data, isLoading, isSuccess, error };
};