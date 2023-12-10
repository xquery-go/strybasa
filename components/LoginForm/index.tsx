'use client';
import React from 'react';
import styles from './LoginForm.module.scss'
import {useFormik} from "formik";
import {roboto} from "@/config/fonts/fonts"
import Link from "next/link";

export const LoginForm = () => {
    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
        },
        onSubmit: values => {
            alert(JSON.stringify(values))
        }
    });

    return (
        <div className={styles.wrapper}>
            <form className={styles.form} onSubmit={formik.handleSubmit}>
                <h2 className={`${styles.title} ${roboto.className}`}>Войти</h2>
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
                    <button className={styles.btn} type="submit">Войти</button>
                    <Link href={'/registration'} className={styles.reg_link}>Нет аккаунта? Зарегестрироваиться</Link>
                </div>
            </form>
        </div>
    )
}