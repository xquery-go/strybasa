import {useQuery} from "react-query";
import axios from "axios";

export interface ISignUpData {
    username: string,
    phone_number: string,
    password: string,
}

export const useUser = (values: ISignUpData) => {
    values.phone_number.replace(' ', '');
    const { data, isLoading, isSuccess, error } = useQuery({
        queryKey: ['tags'],
        queryFn: async () => {

            const data = await axios({
                method: 'post',
                url: 'http://127.0.0.1/api/users/?format=json',
                data: {
                    username: values.username,
                    phone_number: values.phone_number,
                    password: values.password,
                }
            });
            return data.data;
        },
    });
    return { data, isLoading, isSuccess, error };
};