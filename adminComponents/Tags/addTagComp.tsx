'use client';
import React, {useState} from 'react';
import styles from './TagsQueries.module.scss'
import {Button, Input} from "antd";
import { JsonViewer } from '@textea/json-viewer'
import {useFormik} from "formik";
import {useUserStore} from "@/app/userStore";
import {addTag} from "@/adminComponents/Tags/CategoryQueries";

export const AddTagComp = () => {
    const {token} = useUserStore()
    const [res, setRes] = useState<Object | null | undefined>(null)
    const formik = useFormik({
        initialValues: {
            name: '',
            slug: '',
        },
        onSubmit: async (values) => {
            const data = await addTag(token, values);
            setRes(data as Object)
        }
    })
    return (
        <form className={styles.wrapper} onSubmit={formik.handleSubmit}>
            <p className={styles.url}>{`/api/tags/ (post)`} </p>
            <div className={styles.params}>
                <div className={styles.field}>
                    <label htmlFor="name" className={styles.label}>Название</label>
                    <Input
                        className={styles.input}
                        placeholder={'Название'}
                        name={'name'}
                        value={formik.values.name}
                        onChange={formik.handleChange}
                    />
                </div>
                <div className={styles.field}>
                    <label htmlFor="slug" className={styles.label}>Тривиальное название (на английском)</label>
                    <Input
                        className={styles.input}
                        placeholder={'Тривиальное название (на английском)'}
                        name={'slug'}
                        value={formik.values.slug}
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