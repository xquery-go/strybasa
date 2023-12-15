'use client';
import React from 'react';
import styles from './ProfilePage.module.scss'
import {Header} from "@/components/Header";
import Link from "next/link";
import {Footer} from "@/components/Footer";
import {roboto} from "@/config/fonts/fonts";

export default function ProfileLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className={styles.wrapper}>
            <Header />
            <div className={styles.content}>
                <div className={styles.left_part}>
                    <div className={styles.avatar}>
                        <p className={`${styles.avatar_img} ${roboto.className}`}>ВВ</p>
                        <p className={styles.avatar_name}>Василий<br/>Васильев</p>
                    </div>
                    <div className={styles.links}>
                        <Link className={styles.link} href={"/profile"}>Мои заказы</Link>
                        <Link className={styles.link} href={"#"}>Настройки аккаунта</Link>
                        <Link className={styles.link} href={"/"}>Главная</Link>
                        <Link className={styles.link} href={"/shop_cart"}>Моя корзина</Link>
                    </div>
                </div>
                <div className={styles.right_part}>
                    { children }
                </div>
            </div>
            <Footer />
        </div>
    )
}