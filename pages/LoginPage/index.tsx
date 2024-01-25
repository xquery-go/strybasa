import React from 'react';
import styles from './LoginPage.module.scss'
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";
import {LoginForm} from "@/components/LoginForm";

const LoginPage = () => {
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