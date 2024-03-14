import axios from "axios";

export const getAllCategories = async (token: string) => {
    const data = await axios({
        method: 'get',
        url: `http://stroi-basa.ru/api/categories/`,
        headers: {
            Authorization: `Token ${token}`,
        },
    }).catch((res) => {
        return {data: res.response.data}
    })
    return data.data as Object
}

export const addCategory = async (token: string, values: { name: string, slug: string }) => {
    const data = await axios({
        method: 'post',
        url: 'http://stroi-basa.ru/api/categories/',
        headers: {
            Authorization: `Token ${token}`,
        },
        data: values
    }).catch((res) => {
        return {data: res.response.data}
    })
    return data.data as Object
}

export const getCategoryById = async (token: string, values: { id: string | number }) => {
    const data = await axios({
        method: 'get',
        url: `http://stroi-basa.ru/api/categories/${values.id}/`,
        headers: {
            Authorization: `Token ${token}`,
        },
    }).catch((res) => {
        return {data: res.response.data}
    })
    return data.data as Object
}

export const changeCategoryById = async (token: string, values: { id: string | number, name: string, slug: string }) => {
    const processedValues = Object.fromEntries(
        Object.entries(values).filter(([key, value]) => value !== '')
    );
    const data = await axios({
        method: 'patch',
        url: `http://stroi-basa.ru/api/categories/${values.id}/`,
        headers: {
            Authorization: `Token ${token}`,
        },
        data: processedValues
    }).catch((res) => {
        return {data: res.response.data}
    })
    return data.data as Object
}

export const deleteCategoryById = async (token: string, values: { id: string | number }) => {
    const data = await axios({
        method: 'delete',
        url: `http://stroi-basa.ru/api/categories/${values.id}/`,
        headers: {
            Authorization: `Token ${token}`,
        },
    }).catch((res) => {
        return {data: res.response.data}
    })
    return data.data as Object
}