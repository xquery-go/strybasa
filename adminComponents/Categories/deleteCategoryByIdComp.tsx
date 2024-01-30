import React, {useState} from 'react';
import styles from './CategoriesQueries.module.scss'
import {useUserStore} from "@/app/userStore";
import {useFormik} from "formik";
import axios from "axios";
import {Button, Input} from "antd";
import { JsonViewer } from '@textea/json-viewer'
import {deleteCategoryById} from "@/adminComponents/Categories/CategoryQueries";

export const DeleteCategoryByIdComp = () => {
    const {token} = useUserStore()
    const [res, setRes] = useState<Object | null | undefined>(null)
    const formik = useFormik({
        initialValues: {
            id: '',
        },
        onSubmit: async (values) => {
            const data = await deleteCategoryById(token, values);
            setRes(data as Object)
        }
    })
    return (
        <form className={styles.wrapper} onSubmit={formik.handleSubmit}>
            <p className={styles.url}>{`/api/categories/{id}/ (delete)`} </p>
            <div className={styles.params}>
                <div className={styles.field}>
                    <label htmlFor="id" className={styles.label}>* id категории</label>
                    <Input
                        className={styles.input}
                        placeholder={'id категории'}
                        name={'id'}
                        value={formik.values.id}
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