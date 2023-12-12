import React from 'react';
import styles from './OrderPage.module.scss'
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";

export const OrderPage = ({ token }: { token: string }) => {
    return (
        <div className={styles.wrapper}>
            <Header />
            <div className={styles.content}>

            </div>
            <Footer />
        </div>
    )
}