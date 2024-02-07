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

export const changeUserById = async (token: string, values: { id: string | number, username?: string, is_stuff?: string, phone_number?: string, is_active?: string }) => {
    let processedValues = Object.fromEntries(
        Object.entries(values).filter(([key, value]) => value !== '')
    );
    if("is_stuff" in processedValues) {
        processedValues.is_stuff = Number(processedValues.is_stuff)
    }
    if("is_active" in processedValues) {
        processedValues.is_active = Number(processedValues.is_active)
    }
    const data = await axios({
        method: 'patch',
        url: `http://127.0.0.1/api/users/${values.id}/by_admin_user_change/`,
        headers: {
            Authorization: `Token ${token}`,
        },
        data: processedValues
    }).catch((res) => {
        return {data: res.response.data}
    })
    return data.data as Object
}