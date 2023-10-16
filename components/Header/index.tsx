import React from 'react';
import styles from './Header.module.scss'
import {snowStormKraft} from "@/config/fonts/fonts";
import Link from "next/link";
import {ShoppingCart} from "lucide-react";
import {HeaderInfo} from "@/components/HeaderInfo";

export const Header = () => {
    const links = [
        {
            text: "О компании",
            link: "/about",
        },
        {
            text: "Услуги",
            link: "/services",
        },
        {
            text: "Акции",
            link: "/stock",
        },
        {
            text: "Контакты",
            link: "/contacts",
        },
    ]
    const shopCartValue = "0.00";
    return (
        <>
            <HeaderInfo />
            <div className={styles.header}>
                <div className={styles.logo}>
                    <h1 className={`${styles.logo_1} ${snowStormKraft.className}`}>Стройбаза</h1>
                    <h1 className={`${styles.logo_2} ${snowStormKraft.className}`}>«Тиски»</h1>
                </div>
                <nav className={styles.nav}>
                    { links.map((link, ind) => {
                        return <Link href={link.link} key={ind} className={styles.nav_link}>{link.text}</Link>
                    })}
                </nav>
                <Link href={"/shop_cart"} className={styles.shopCart}>
                    <ShoppingCart width={30} height={30} className={styles.shopCart_img} />
                    <p className={styles.shopCart_value}>{String(shopCartValue)}₽</p>
                </Link>
            </div>
        </>
    );
};