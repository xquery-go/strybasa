import {useQuery} from "react-query";
import axios from "axios";
import {IUser} from "@/app/userStore";

export interface ISignUpData {
    username: string,
    phone_number: string,
    password: string,
}


export const postUser = (values: ISignUpData) => {
    values.phone_number.replace(' ', '');
    let { data, isLoading, isSuccess, error } = useQuery({
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
    if("errors" in data)
        data = { user_id: -1, username: '', phone_number: '', date_joined: '', errors: data.errors as Object } as IUser;
    else if(!data)
        data = { user_id: -1, username: '', phone_number: '', date_joined: '', errors: {main_error: 'Какая-то бл ошибка с подключением'} } as IUser;
    return { data, isLoading, isSuccess, error };
};