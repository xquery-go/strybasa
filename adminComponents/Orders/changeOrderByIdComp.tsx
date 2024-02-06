import React, {useState} from 'react';
import styles from './OrdersQueries.module.scss'
import {useUserStore} from "@/app/userStore";
import {useFormik} from "formik";
import {Button, Input} from "antd";
import { JsonViewer } from '@textea/json-viewer'
import {changeOrderById} from "@/adminComponents/Orders/OrderQueries";

export const ChangeOrderByIdComp = () => {
    const {token} = useUserStore()
    const [res, setRes] = useState<Object | null | undefined>(null)
    const formik = useFormik({
        initialValues: {
            order_id: '',
            order_comment: '',
            signer_firstname: '',
            signer_lastname: '',
            signer_address: '',
            status: '',
        },
        onSubmit: async (values) => {
            const data = await changeOrderById(token, values);
            setRes(data as Object)
        }
    })
    return (
        <form className={styles.wrapper} onSubmit={formik.handleSubmit}>
            <p className={styles.url}>{`/api/products/{id}/ (patch)`}</p>
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
                <div className={styles.field}>
                    <label htmlFor="order_comment" className={styles.label}>Комментарий к заказу</label>
                    <Input
                        className={styles.input}
                        placeholder={'Комментарий к заказу'}
                        name={'order_comment'}
                        value={formik.values.order_comment}
                        onChange={formik.handleChange}
                    />
                </div>
                <div className={styles.field}>
                    <label htmlFor="signer_firstname" className={styles.label}>Имя покупателя</label>
                    <Input
                        className={styles.input}
                        placeholder={'Имя покупателя'}
                        name={'signer_firstname'}
                        value={formik.values.signer_firstname}
                        onChange={formik.handleChange}
                    />
                </div>
                <div className={styles.field}>
                    <label htmlFor="signer_lastname" className={styles.label}>Фамилия покупателя</label>
                    <Input
                        className={styles.input}
                        placeholder={'Фамилия покупателя'}
                        name={'signer_lastname'}
                        value={formik.values.signer_lastname}
                        onChange={formik.handleChange}
                    />
                </div>
                <div className={styles.field}>
                    <label htmlFor="signer_address" className={styles.label}>Адрес покупателя</label>
                    <Input
                        className={styles.input}
                        placeholder={'Адрес покупателя'}
                        name={'signer_address'}
                        value={formik.values.signer_address}
                        onChange={formik.handleChange}
                    />
                </div>
                <div className={styles.field}>
                    <label htmlFor="status" className={styles.label}>Статус заказа</label>
                    <Input
                        className={styles.input}
                        placeholder={'Статус заказа'}
                        name={'status'}
                        value={formik.values.status}
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