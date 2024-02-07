import React, {useState} from 'react';
import styles from './UsersQueries.module.scss'
import {useUserStore} from "@/app/userStore";
import {useFormik} from "formik";
import {Button, Input} from "antd";
import { JsonViewer } from '@textea/json-viewer'
import {changeTagById} from "@/adminComponents/Tags/TagQueries";
import {changeUserById} from "@/adminComponents/Users/UsersQueries";
import {MaskedInput} from "antd-mask-input";

export const ChangeUserByIdComp = () => {
    const {token} = useUserStore()
    const [res, setRes] = useState<Object | null | undefined>(null)
    const formik = useFormik({
        initialValues: {
            id: '',
            username: '',
            phone_number: '',
            is_stuff: '',
            is_active: '',
        },
        onSubmit: async (values) => {
            const data = await changeUserById(token, values);
            setRes(data as Object)
        }
    })
    return (
        <form className={styles.wrapper} onSubmit={formik.handleSubmit}>
            <p className={styles.url}>{`/api/users/{user_id}/by_admin_user_change/ (patch)`}</p>
            <div className={styles.params}>
                <div className={styles.field}>
                    <label htmlFor="id" className={styles.label}>* id пользователя</label>
                    <Input
                        className={styles.input}
                        placeholder={'id пользователя'}
                        name={'id'}
                        value={formik.values.id}
                        onChange={formik.handleChange}
                    />
                </div>
                <div className={styles.field}>
                    <label htmlFor="name" className={styles.label}>Имя пользователя</label>
                    <Input
                        className={styles.input}
                        placeholder={'Имя пользователя'}
                        name={'name'}
                        value={formik.values.username}
                        onChange={formik.handleChange}
                    />
                </div>
                <div className={styles.field}>
                    <label htmlFor="phone_number" className={styles.label}>Номер телефона</label>
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
                    <label htmlFor="is_stuff" className={styles.label}>Является ли пользователь сотрудником (1 - если да; 0 - если нет; оставьте пустым если не хотите менять)</label>
                    <Input
                        className={styles.input}
                        placeholder={'Является ли пользователь сотрудником'}
                        name={'is_stuff'}
                        value={formik.values.is_stuff}
                        onChange={formik.handleChange}
                    />
                </div>
                <div className={styles.field}>
                    <label htmlFor="is_active" className={styles.label}>Верифицирован ли пользователь (1 - если да; 0 - если нет; оставьте пустым если не хотите менять)</label>
                    <Input
                        className={styles.input}
                        placeholder={'Верифицирован ли пользователь'}
                        name={'is_active'}
                        value={formik.values.is_active}
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