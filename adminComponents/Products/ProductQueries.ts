import axios from "axios";
import {initialFormikValues} from "@/adminComponents/Products/addProductComp";

export const getAllProducts = async (token: string) => {
    const data = await axios({
        method: 'get',
        url: `http://127.0.0.1/api/products/`,
        headers: {
            Authorization: `Token ${token}`,
        },
    }).catch((res) => {
        return {data: res.response.data}
    })
    return data.data as Object
}

export const addProduct = async (
    token: string,
    values: initialFormikValues
) => {
    const tags = values.tags.split(" ").map(Number)
    const categories = values.categories.split(" ").map(Number)
    const processedValues = { ...values, tags: tags, categories: categories };
    const data = await axios({
        method: 'post',
        url: 'http://127.0.0.1/api/products/',
        headers: {
            Authorization: `Token ${token}`,
        },
        data: processedValues
    }).catch((res) => {
        return {data: res.response.data}
    })
    return data.data as Object
}

export const getProductById = async (token: string, values: { product_id: string | number }) => {
    const data = await axios({
        method: 'get',
        url: `http://127.0.0.1/api/products/${values.product_id}/`,
        headers: {
            Authorization: `Token ${token}`,
        },
    }).catch((res) => {
        return {data: res.response.data}
    })
    return data.data as Object
}

export const changeProductById = async (
    token: string,
    values: {
        product_id: string,
        name: string,
        description: string,
        price: string,
        quantity: string,
        product_image: string,
        tags: string,
        categories: string
    }
) => {
    const processedValues = Object.fromEntries(
        Object.entries(values).filter(([key, value]) => value !== '')
    );
    const data = await axios({
        method: 'patch',
        url: `http://127.0.0.1/api/products/${values.product_id}/`,
        headers: {
            Authorization: `Token ${token}`,
        },
        data: processedValues
    }).catch((res) => {
        return {data: res.response.data}
    })
    return data.data as Object
}

export const deleteProductById = async (token: string, values: { product_id: string | number }) => {
    const data = await axios({
        method: 'delete',
        url: `http://127.0.0.1/api/products/${values.product_id}/`,
        headers: {
            Authorization: `Token ${token}`,
        },
    }).catch((res) => {
        return {data: res.response.data}
    })
    return data.data as Object
}