'use client';
import React from 'react';
import styles from './RegForm.module.scss'
import {useFormik} from "formik";
import {roboto} from "@/config/fonts/fonts"
import Link from "next/link";
import {ISignUpData, useUser} from "@/hooks/useUser";

export const RegForm = () => {
    const formik = useFormik({
        initialValues: {
            username: '',
            phone_number: '',
            password: '',
        },
        onSubmit: values => {
            const {data} = useUser(values)
            console.log(data)
        }
    });
    return (
        <div className={styles.wrapper}>
            <form className={styles.form} onSubmit={formik.handleSubmit}>
                <h2 className={`${styles.title} ${roboto.className}`}>Регистрация</h2>
                <div className={styles.field}>
                    <label htmlFor="username">Имя пользователя</label>
                    <input
                        className={styles.input}
                        type="text"
                        name="username"
                        value={formik.values.username}
                        onChange={formik.handleChange}
                        placeholder={"Имя пользователя"}
                    />
                </div>
                <div className={styles.field}>
                    <label htmlFor="phone_number">Номер телефона</label>
                    <input
                        className={styles.input}
                        name={"phone_number"}
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
                </div>
                <div className={styles.bottomPart}>
                    <button className={styles.btn} type="submit">Зарегистрироваться</button>
                    <Link href={'/login'} className={styles.login_link}>Уже усть аккаунт? Войти</Link>
                </div>
            </form>
        </div>
    )
}