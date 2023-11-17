'use client';
import React from 'react';
import styles from './RegForm.module.scss'
import {useFormik} from "formik";
import {roboto} from "@/config/fonts/fonts";

export const RegForm = () => {
    const formik = useFormik({
        initialValues: {
            username: '',
            phone_number: '',
            password: '',
        },
        onSubmit: values => {
            alert(JSON.stringify(values))
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
                <input
                    className={styles.input}
                    type="text"
                    name="phone_number"
                    value={formik.values.phone_number}
                    onChange={formik.handleChange}
                    placeholder={"Номер телефона"}
                />
                <input
                    className={styles.input}
                    type="password"
                    name="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    placeholder={"Введите пароль"}
                />
                <button className={styles.btn} type="submit">Зарегистрироваться</button>
            </form>
        </div>
    )
}