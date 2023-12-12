'use client';
import React, {useState} from 'react';
import styles from './RegForm2.module.scss'
import {roboto} from "@/config/fonts/fonts"
import Link from "next/link";
import {useAuthorizeStore} from "@/app/authorizeStore";
import axios from "axios";
import {useRouter} from "next/navigation";

export const RegForm2 = () => {
    const router = useRouter()
    const [code, setCode] = useState<string>('');
    const { signUpData } = useAuthorizeStore()
    const handleSubmit = async () => {
        let el = document.getElementById('code');
        if(el) {
            el.style.display = 'none';
        }
        let data = await axios({
            method: 'post',
            url: 'http://127.0.0.1/api/users/confirm_active_user/',
            data: {
                "phone_number": signUpData?.phone_number,
                "redis_key": code,
            }
        }).catch((response) => {
            let el = document.getElementById('code')
            if(el) {
                el.innerText = "*" + response.response.data;
                el.style.display = 'block';
            }
            return response.response.data
        })
        let el1 = document.getElementById('right_code');
        if(el1) {
            el1.style.display = 'block';
        }
        await router.push('/login')
    }

    return (
        <div className={styles.wrapper}>
            <form className={styles.form}>
                <h2 className={`${styles.title} ${roboto.className}`}>Верификация</h2>
                <div className={styles.field}>
                    <label htmlFor="code">Код верификации</label>
                    <input
                        className={styles.input}
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                        type="text"
                        name="code"
                        placeholder={"Код верификации"}
                    />
                    <p className={styles.error} id='code'></p>
                    <p className={`${styles.error} ${styles.error_right}`} id={'right_code'}>Успешно!</p>
                </div>
                <div className={styles.bottomPart}>
                    <p className={styles.btn} onClick={handleSubmit} >Зарегестрироваться</p>
                    <Link href={'/login'} className={styles.reg_link}>Уже усть аккаунт? Войти</Link>
                </div>
            </form>
        </div>
    )
}