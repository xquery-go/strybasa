import React from 'react';
import styles from './PasswordRecoveryPage.module.scss'
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";
import {PasswordRecoveryForm} from "@/components/PasswordRecoveryForm";

export const PasswordRecoveryPage = () => {
    return (
        <div className={styles.wrapper}>
            <title>Восстановление пароля | Стройбаза Тиски</title>
            <Header />
            <div className={styles.content}>
                <PasswordRecoveryForm />
            </div>
            <Footer />
        </div>
    )
}