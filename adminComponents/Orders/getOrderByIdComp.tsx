import React, {useState} from 'react';
import styles from './OrdersQueries.module.scss'
import {useUserStore} from "@/app/userStore";
import {useFormik} from "formik";
import {Button, Input} from "antd";
import { JsonViewer } from '@textea/json-viewer'
import {getOrderById} from "@/adminComponents/Orders/OrderQueries";

export const GetOrderByIdComp = () => {
    const {token} = useUserStore()
    const [res, setRes] = useState<Object | null | undefined>(null)
    const formik = useFormik({
        initialValues: {
            order_id: '',
        },
        onSubmit: async (values) => {
            const data = await getOrderById(token, values);
            setRes(data);
        }
    })
    return (
        <form className={styles.wrapper} onSubmit={formik.handleSubmit}>
            <p className={styles.url}>{`/api/orders/{id}/ (get)`} </p>
            <div className={styles.params}>
                <div className={styles.field}>
                    <label htmlFor="order_id" className={styles.label}>* id заказа</label>
                    <Input
                        className={styles.input}
                        placeholder={'id заказа'}
                        name={'order_id'}
                        value={formik.values.order_id}
                        onChange={formik.handleChange}
                    />
                </div>
            </div>
            <Button type="primary" htmlType='submit'>Сделать запрос</Button>
            {res ?
                <div className={styles.response}>
                    <p className={styles.response_title}>Ответ сервера</p>
                    <JsonViewer
                        enableClipboard={false}
                        displayDataTypes={false}
                        value={res ? res : {}}
                    />
                </div> :
                <></>
            }
        </form>
    )
}