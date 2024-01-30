import axios from "axios";

export const getAllTags = async (token: string) => {
    const data = await axios({
        method: 'get',
        url: `http://127.0.0.1/api/tags/`,
        headers: {
            Authorization: `Token ${token}`,
        },
    }).catch((res) => {
        return {data: res.response.data}
    })
    return data.data as Object
}

export const addTag = async (token: string, values: { name: string, slug: string }) => {
    const data = await axios({
        method: 'post',
        url: 'http://127.0.0.1/api/tags/',
        headers: {
            Authorization: `Token ${token}`,
        },
        data: values
    }).catch((res) => {
        return {data: res.response.data}
    })
    return data.data as Object
}

export const getTagById = async (token: string, values: { id: string | number }) => {
    const data = await axios({
        method: 'get',
        url: `http://127.0.0.1/api/tags/${values.id}/`,
        headers: {
            Authorization: `Token ${token}`,
        },
    }).catch((res) => {
        return {data: res.response.data}
    })
    return data.data as Object
}

export const changeTagById = async (token: string, values: { id: string | number, name: string, slug: string }) => {
    const processedValues = Object.fromEntries(
        Object.entries(values).filter(([key, value]) => value !== '')
    );
    const data = await axios({
        method: 'patch',
        url: `http://127.0.0.1/api/tags/${values.id}/`,
        headers: {
            Authorization: `Token ${token}`,
        },
        data: processedValues
    }).catch((res) => {
        return {data: res.response.data}
    })
    return data.data as Object
}

export const deleteTagById = async (token: string, values: { id: string | number }) => {
    const data = await axios({
        method: 'delete',
        url: `http://127.0.0.1/api/tags/${values.id}/`,
        headers: {
            Authorization: `Token ${token}`,
        },
    }).catch((res) => {
        return {data: res.response.data}
    })
    return data.data as Object
}