import React from 'react';
import styles from './RegistrationPage.module.scss'
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";
import {RegForm} from "@/components/RegForm";

export const RegistrationPage = () => {
    return (
        <div>
            <head>
                <title>Регистрация | Стройбаза Тиски</title>
            </head>
            <div className={styles.wrapper}>
                <Header />
                <div className={styles.content}>
                    <RegForm />
                </div>
                <Footer />
            </div>
        </div>
    )
}