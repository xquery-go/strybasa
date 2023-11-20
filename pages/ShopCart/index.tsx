import React from 'react';
import styles from './ShopCart.module.scss'
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";
import {roboto} from "@/config/fonts/fonts";

export const ShopCart = () => {
    return (
        <div className={styles.wrapper}>
            <Header />
            <div className={styles.content}>
                <h1 className={`${styles.name} ${roboto.className}`}>Корзина</h1>
                <div className={styles.services}>

                </div>
            </div>
            <Footer />
        </div>
    )
}