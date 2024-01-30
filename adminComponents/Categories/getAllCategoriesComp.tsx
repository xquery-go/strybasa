import React, {useState} from 'react';
import styles from './CategoriesQueries.module.scss'
import {Button, Input} from "antd";
import { JsonViewer } from '@textea/json-viewer'
import {useUserStore} from "@/app/userStore";
import {useFormik} from "formik";
import axios from "axios";
import {getAllCategories} from "@/adminComponents/Categories/CategoryQueries";

export const GetAllCategoriesComp = () => {
    const {token} = useUserStore()
    const [res, setRes] = useState<Object | null | undefined>(null)
    const formik = useFormik({
        initialValues: {},
        onSubmit: async () => {
            const data = await getAllCategories(token)
            setRes(data as Object)
        }
    })
    return (
        <form className={styles.wrapper} onSubmit={formik.handleSubmit}>
            <p className={styles.url}>{`/api/categories/ (get)`} </p>
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