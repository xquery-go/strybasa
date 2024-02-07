import axios from "axios";

export const addNewAdministrator = async (token: string, values: { name: string, phone_number: string, password: string }) => {
    const data = await axios({
        method: 'post',
        url: 'http://127.0.0.1/api/users/admin_create/',
        headers: {
            Authorization: `Token ${token}`,
        },
        data: values
    }).catch((res) => {
        return {data: res.response.data}
    })
    return data.data as Object
}