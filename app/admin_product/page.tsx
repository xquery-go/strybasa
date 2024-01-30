'use client';
import React, {useEffect} from 'react';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import {Button, Input, Space} from 'antd';
import styles from './AdminLogin.module.scss'
import {MaskedInput} from "antd-mask-input";
import {useFormik} from "formik";
import {useRouter} from "next/navigation";
import axios from "axios";
import {useUserStore} from "@/app/userStore";

export default function AdminLogin() {
    const {token, curUser} = useUserStore()
    const router = useRouter()
    useEffect(() => {
        if(token && curUser?.is_staff) router.push('/admin_product/admin_product_panel  ')
    }, [token, curUser, router])
    const {setUser} = useUserStore()
    const formik = useFormik({
        initialValues: {
            phone_number: '',
            password: '',
        },
        onSubmit: async (values) => {
            let p_phone_number = "+7" + values.phone_number.replace(/[\(\)\-\s]/g, '');
            let el = document.getElementById("error"), error = false;
            if(el) el.style.display = 'none';
            const data = await axios({
                method: 'post',
                url: 'http://127.0.0.1/api/auth/token/login/',
                data: {
                    "phone_number": p_phone_number,
                    "password": values.password
                },
            }).catch(() => {
                if(el) el.style.display = 'block';
                error = true
                return {data: {data: {auth_token: ''}}};
            })
            if(!error) {
                let processedData = data.data;
                setUser(processedData.auth_token as string, processedData.user_id as number)
                router.push('/admin_product/admin_product_panel')
            }
        }
    });
    return (
        <div className={styles.wrapper}>
            <form className={styles.form} onSubmit={formik.handleSubmit}>
                <h1 className={styles.title}>Вход</h1>
                <Space direction="vertical" size='middle' className={styles.space}>
                    <div className={styles.field}>
                        <label
                            htmlFor="phone_number"
                            className={`${styles.label}`}
                        >Введите номер телефона</label>
                        <MaskedInput
                            size='large'
                            name={'phone_number'}
                            value={formik.values.phone_number}
                            onChange={formik.handleChange}
                            mask={'(000) 000-00-00'}
                            addonBefore={'+7'}
                        />
                    </div>
                    <div className={styles.field}>
                        <label
                            htmlFor="password"
                            className={`${styles.label}`}
                        >Введите пароль</label>
                        <Input.Password
                            size='large'
                            name={'password'}
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            placeholder="input password"
                            iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                        />
                    </div>
                    <p className={styles.error} id='error'>Ошибка. Попробуйте ещё раз</p>
                    <Button type="primary" htmlType="submit">Войти</Button>`
                </Space>
            </form>
        </div>
    )
}