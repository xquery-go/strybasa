'use client';
import React, {useState} from 'react';
import styles from './UsersQueries.module.scss'
import {Button, Input} from "antd";
import { JsonViewer } from '@textea/json-viewer'
import {useFormik} from "formik";
import {useUserStore} from "@/app/userStore";
import {addNewAdministrator} from "@/adminComponents/Users/UsersQueries";
import {MaskedInput} from "antd-mask-input";

export const AddNewAdministratorComp = () => {
    const {token} = useUserStore()
    const [res, setRes] = useState<Object | null | undefined>(null)
    const formik = useFormik({
        initialValues: {
            name: '',
            phone_number: '',
            password: '',
        },
        onSubmit: async (values) => {
            const data = await addNewAdministrator(token, values);
            setRes(data as Object)
        }
    })
    return (
        <form className={styles.wrapper} onSubmit={formik.handleSubmit}>
            <p className={styles.url}>{`/api/users/admin_create/ (post)`} </p>
            <div className={styles.params}>
                <div className={styles.field}>
                    <label htmlFor="name" className={styles.label}>* Имя пользователя</label>
                    <Input
                        className={styles.input}
                        placeholder={'Имя пользователя'}
                        name={'name'}
                        value={formik.values.name}
                        onChange={formik.handleChange}
                    />
                </div>
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
                <div className={styles.field}>
                    <label htmlFor="password" className={styles.label}>* Пароль</label>
                    <Input
                        className={styles.input}
                        placeholder={'Пароль'}
                        name={'password'}
                        value={formik.values.password}
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