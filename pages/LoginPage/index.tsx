import React from 'react';
import styles from './LoginPage.module.scss'
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";
import {LoginForm} from "@/components/LoginForm";

export const LoginPage = () => {
    return (
        <div>
            <div className={styles.wrapper}>
                <Header />
                <div className={styles.content}>
                    <LoginForm />
                </div>
                <Footer />
            </div>
        </div>
    )
}