import axios from "axios";

export const getAllOrders = async (token: string) => {
    const data = await axios({
        method: 'get',
        url: `http://stroi-basa.ru/api/orders/all_orders/`,
        headers: {
            Authorization: `Token ${token}`,
        },
    }).catch((res) => {
        return {data: res.response.data}
    })
    return data.data as Object
}

export const changeOrderById = async (
    token: string,
    values: {
        order_id: string,
        order_comment?: string,
        signer_firstname?: string,
        signer_lastname?: string,
        signer_address?: string,
    }
) => {
    const order_id = values.order_id;
    let processedValues = Object.fromEntries(
        Object.entries(values).filter(([key, value]) => value !== '')
    );
    delete processedValues.order_id;
    const data = await axios({
        method: 'patch',
        url: `http://stroi-basa.ru/api/orders/${order_id}/`,
        headers: {
            Authorization: `Token ${token}`,
        },
        data: processedValues
    }).catch((res) => {
        return {data: res.response.data}
    })
    return data.data as Object
}

export const deleteOrderById = async (token: string, values: { order_id: string | number }) => {
    const data = await axios({
        method: 'delete',
        url: `http://stroi-basa.ru/api/orders/${values.order_id}/`,
        headers: {
            Authorization: `Token ${token}`,
        },
    }).catch((res) => {
        return {data: res.response.data}
    })
    return data.data as Object
}

export const getOrderById = async (token: string, values: { order_id: string | number }) => {
    const data = await axios({
        method: 'get',
        url: `http://stroi-basa.ru/api/orders/${values.order_id}/`,
        headers: {
            Authorization: `Token ${token}`,
        },
    }).catch((res) => {
        return {data: res.response.data}
    })
    return data.data as Object
}

export const getOrderByPhoneNumber = async (token: string, values: { phone_number: string | number }) => {
    const data = await axios({
        method: 'post',
        url: `http://stroi-basa.ru/api/orders/by_phone_orders/`,
        headers: {
            Authorization: `Token ${token}`,
        },
        data: values,
    }).catch((res) => {
        return {data: res.response.data}
    })
    return data.data as Object
}


export const getOrdersStatuses = async (token: string) => {
    const data = await axios({
        method: 'get',
        url: `http://stroi-basa.ru/api/orders/order_status/`,
        headers: {
            Authorization: `Token ${token}`,
        },
    }).catch((res) => {
        return {data: res.response.data}
    })
    return data.data as Object
}