'use client';
import React, {useEffect} from 'react';
import styles from './LoginForm.module.scss'
import {useFormik} from "formik";
import {roboto} from "@/config/fonts/fonts"
import Link from "next/link";
import axios from "axios";
import {useRouter} from "next/navigation";
import {useUserStore} from "@/app/userStore";
import toast from "react-hot-toast";

export const LoginForm = () => {
    const {setUser} = useUserStore()
    const router = useRouter()

    const formik = useFormik({
        initialValues: {
            phone_number: '',
            password: '',
        },
        onSubmit: async (values) => {
            let el = document.getElementById("error"), error = false;
            if(el) el.style.display = 'none';
            const data = await axios({
                method: 'post',
                url: 'http://127.0.0.1/api/auth/token/login/',
                data: {
                    "phone_number": values.phone_number,
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
                toast.success("Вы успешно вошли!", { position: 'bottom-right' })
                router.push('/')
            }
        }
    });

    return (
        <div className={styles.wrapper}>
            <form className={styles.form} onSubmit={formik.handleSubmit}>
                <h2 className={`${styles.title} ${roboto.className}`}>Войти</h2>
                <div className={styles.field}>
                    <p className={styles.error} id='error'>Попробуйте ещё раз</p>
                    <label htmlFor="phone_number">Номер телефона</label>
                    <input
                        className={styles.input}
                        type="text"
                        name="phone_number"
                        value={formik.values.phone_number}
                        onChange={formik.handleChange}
                        placeholder={"Номер телефона"}
                    />
                </div>
                <div className={styles.field}>
                    <label htmlFor="password">Пароль</label>
                    <input
                        className={styles.input}
                        type="password"
                        name="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        placeholder={"Введите пароль"}
                    />
                    <Link href={'/password_recovery'} className={styles.password_recovery_link}>Восстановить пароль</Link>
                </div>
                <div className={styles.bottomPart}>
                    <button className={styles.btn} type="submit">Войти</button>
                    <Link href={'/registration'} className={styles.reg_link}>Нет аккаунта? Зарегестрироваиться</Link>
                </div>
            </form>
        </div>
    )
}