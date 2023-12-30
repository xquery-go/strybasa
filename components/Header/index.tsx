'use client';
import React from 'react';
import styles from './Header.module.scss'
import Link from "next/link";
import {AlertTriangle, ShoppingCart} from "lucide-react";
import {HeaderInfo} from "@/components/Header/HeaderInfo";
import {HeaderLinks} from "@/components/Header/HeaderLinks";
import {roboto} from "@/config/fonts/fonts";
import {useUserStore} from "@/app/userStore";
import {HeaderShopCartValue} from "@/components/Header/HeaderShopCartValue";
import toast from "react-hot-toast";

export const Header = () => {
    const {token} = useUserStore()
    const handleClick = () => {
        if(!token)
            toast(
                "В начале войдите в аккаунт", {
                    position: "bottom-right",
                    icon: <AlertTriangle color={"#000"} width={15} height={15} />
                })
    }
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

                    <Link
                        href={token ? "/shop_cart" : "/login"}
                        onClick={() => { handleClick() }}
                        className={styles.shopCart}>
                        <ShoppingCart width={35} height={35} className={styles.shopCart_img} />
                        <p className={styles.shopCart_value}>
                            <HeaderShopCartValue token={token}/>₽
                        </p>
                    </Link>
                </div>
            </div>
        </div>
    );
};