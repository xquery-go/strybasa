'use client';
import React, {useEffect} from 'react';
import styles from './LoginPage.module.scss'
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";
import {LoginForm} from "@/components/LoginForm";
import Cookies from "universal-cookie";
import {useRouter} from "next/navigation";

const LoginPage = () => {
    const cookies = new Cookies(null, { path: '/' })
    const token = cookies.get('token'), user_id = cookies.get('user_id');
    const router = useRouter()
    useEffect(() => {
        if(user_id != -1 && token != '' && token && user_id && window.location.pathname == '/login')
            router.push('/')
    })
    return (
        <div className={styles.wrapper}>
            <title>Вход | Стройбаза Тиски</title>
            <Header />
            <div className={styles.content}>
                <LoginForm />
            </div>
            <Footer />
        </div>
    )
}

export default LoginPage;