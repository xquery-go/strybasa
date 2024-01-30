import React, {useState} from 'react';
import styles from './CategoriesQueries.module.scss'
import {useFormik} from "formik";
import {Button, Input} from "antd";
import { JsonViewer } from '@textea/json-viewer'
import {getCategoryById} from "@/adminComponents/Categories/CategoryQueries";
import {useUserStore} from "@/app/userStore";

export const GetCategoryByIdComp = () => {
    const {token} = useUserStore()
    const [res, setRes] = useState<Object | null | undefined>(null)
    const formik = useFormik({
        initialValues: {
            id: '',
        },
        onSubmit: async (values) => {
            const data = await getCategoryById(token, values);
            setRes(data);
        }
    })
    return (
        <form className={styles.wrapper} onSubmit={formik.handleSubmit}>
            <p className={styles.url}>{`/api/categories/{id}/ (get)`} </p>
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