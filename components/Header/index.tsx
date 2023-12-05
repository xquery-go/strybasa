'use client';
import React, {useEffect, useState} from 'react';
import styles from './Header.module.scss'
import Link from "next/link";
import {ShoppingCart} from "lucide-react";
import {HeaderInfo} from "@/components/Header/HeaderInfo";
import {HeaderLinks} from "@/components/Header/HeaderLinks";
import {roboto} from "@/config/fonts/fonts";
import {useShopCart} from "@/hooks/useShopCart";

export const Header = () => {
    const [totalCost, setTotalCost] = useState<string>('0.00')
    return (
        <div className={styles.headerBlock}>
            <HeaderInfo />
            <div className={styles.wrapper}>
                <div className={styles.header}>
                    <Link href={'/'}>
                    <div className={styles.logo}>
                        <h1 className={`${styles.logo_1} ${roboto.className}`}>Стройбаза</h1>
                        <h1 className={`${styles.logo_2} ${roboto.className}`}>«Тиски»</h1>
                    </div>
                    </Link>
                    <nav className={styles.nav}>
                        { HeaderLinks.map((link, ind) => {
                            return <Link href={link.link} key={ind} className={styles.nav_link}>{link.text}</Link>
                        })}
                    </nav>
                    <Link href={"/shop_cart"} className={styles.shopCart}>
                        <ShoppingCart width={35} height={35} className={styles.shopCart_img} />
                        <p className={styles.shopCart_value}>{String(totalCost)}₽</p>
                    </Link>
                </div>
            </div>
        </div>
    );
};