import React, {useState} from 'react';
import styles from './ProductsQueries.module.scss'
import {useUserStore} from "@/app/userStore";
import {useFormik} from "formik";
import {Button, Input} from "antd";
import { JsonViewer } from '@textea/json-viewer'
import {getProductById} from "@/adminComponents/Products/ProductQueries";

export const GetProductByIdComp = () => {
    const {token} = useUserStore()
    const [res, setRes] = useState<Object | null | undefined>(null)
    const formik = useFormik({
        initialValues: {
            product_id: '',
        },
        onSubmit: async (values) => {
            const data = await getProductById(token, values);
            setRes(data);
        }
    })
    return (
        <form className={styles.wrapper} onSubmit={formik.handleSubmit}>
            <p className={styles.url}>{`/api/products/{id}/ (get)`} </p>
            <div className={styles.params}>
                <div className={styles.field}>
                    <label htmlFor="product_id" className={styles.label}>* id товара</label>
                    <Input
                        className={styles.input}
                        placeholder={'id товара'}
                        name={'product_id'}
                        value={formik.values.product_id}
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