import React, {useState} from 'react';
import styles from './OrdersQueries.module.scss'
import {useUserStore} from "@/app/userStore";
import {useFormik} from "formik";
import {Button, Input} from "antd";
import { JsonViewer } from '@textea/json-viewer'
import {getOrderByPhoneNumber} from "@/adminComponents/Orders/OrderQueries";
import {MaskedInput} from "antd-mask-input";

export const GetOrdersByPhoneNumberComp = () => {
    const {token} = useUserStore()
    const [res, setRes] = useState<Object | null | undefined>(null)
    const formik = useFormik({
        initialValues: {
            phone_number: '',
        },
        onSubmit: async (values) => {
            const data = await getOrderByPhoneNumber(token, values);
            setRes(data);
        }
    })
    return (
        <form className={styles.wrapper} onSubmit={formik.handleSubmit}>
            <p className={styles.url}>{`/api/orders/by_phone_orders/ (post)`} </p>
            <div className={styles.params}>
                <div className={styles.field}>
                    <label htmlFor="phone_number" className={styles.label}>* Номер телефона</label>
                    <MaskedInput
                        size='middle'
                        name={'phone_number'}
                        className={styles.input}
                        value={formik.values.phone_number}
                        onChange={formik.handleChange}
                        mask={'(000) 000-00-00'}
                        addonBefore={'+7'}
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