import React from 'react';
import styles from './OrderingPage.module.scss'
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";

export const OrderingPage = ({ token }: { token: string }) => {
    return (
        <div className={styles.wrapper}>
            <Header />
            <div className={styles.content}>
                Оформление заказа
            {/*    order_comment signer_firstname signer_lastname signer_address */}
            </div>
            <Footer />
        </div>
    )
}