import React, {useState} from 'react';
import styles from './OrdersQueries.module.scss'
import {Button} from "antd";
import { JsonViewer } from '@textea/json-viewer'
import {useUserStore} from "@/app/userStore";
import {useFormik} from "formik";
import {getAllOrders} from "@/adminComponents/Orders/OrderQueries";

export const GetAllOrdersComp = () => {
    const {token} = useUserStore()
    const [res, setRes] = useState<Object | null | undefined>(null)
    const formik = useFormik({
        initialValues: {},
        onSubmit: async () => {
            const data = await getAllOrders(token)
            setRes(data as Object)
        }
    })
    return (
        <form className={styles.wrapper} onSubmit={formik.handleSubmit}>
            <p className={styles.url}>{`/api/orders/ (get)`} </p>
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