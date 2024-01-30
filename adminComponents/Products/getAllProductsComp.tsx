import React, {useState} from 'react';
import styles from './ProductsQueries.module.scss'
import {Button} from "antd";
import { JsonViewer } from '@textea/json-viewer'
import {useUserStore} from "@/app/userStore";
import {useFormik} from "formik";
import {getAllProducts} from "@/adminComponents/Products/ProductQueries";

export const GetAllProductsComp = () => {
    const {token} = useUserStore()
    const [res, setRes] = useState<Object | null | undefined>(null)
    const formik = useFormik({
        initialValues: {},
        onSubmit: async () => {
            const data = await getAllProducts(token)
            setRes(data as Object)
        }
    })
    return (
        <form className={styles.wrapper} onSubmit={formik.handleSubmit}>
            <p className={styles.url}>{`/api/products/ (get)`} </p>
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