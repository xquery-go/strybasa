'use client';
import React from 'react';
import styles from './RegForm.module.scss'
import {useFormik} from "formik";
import {roboto} from "@/config/fonts/fonts"
import Link from "next/link";
import axios from "axios";
import {useRouter} from "next/navigation";
import {useAuthorizeStore} from "@/app/authorizeStore";
import {ISignUpData} from "@/models/ISignUpData";

export const RegForm = () => {
    const router = useRouter()
    const { setSignUpData }  = useAuthorizeStore()
    const formik = useFormik({
        initialValues: {
            username: '',
            phone_number: '',
            password: '',
        }, onSubmit: async (values) => {
            for(let i of ["username", "phone_number", "password"]) {
                let el = document.getElementById(i);
                if(el) {
                    el.style.display = 'none';
                }
            }
            let data = await axios({
                method: 'post',
                url: 'http://127.0.0.1/api/users/?format=json',
                data: values
            }).catch(function(error) {
                return error.response
            });
            data = data.data;

            if("errors" in data) {
                const errors = data.errors;
                for (let key in errors) {
                    if(errors.hasOwnProperty(key)){
                        let el = document.getElementById(key);
                        if(el) {
                            el.innerText = "* " + errors[key][0];
                            el.style.display = 'block';
                        }
                    }
                }
            } else {
                setSignUpData(data as ISignUpData)
                await router.push('/registration/verification')
            }
        },
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
                    <p id='username' className={styles.error}>Error</p>
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
                    <p id='phone_number' className={styles.error}>Error</p>
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
                    <p id='password' className={styles.error}>Error</p>
                </div>
                <div className={styles.bottomPart}>
                    <button className={styles.btn} type="submit">Зарегистрироваться</button>
                    <Link href={'/login'} className={styles.login_link}>Уже усть аккаунт? Войти</Link>
                </div>
            </form>
        </div>
    )
}