'use client';
import React, {useEffect} from 'react';
import {useProfileStore} from "@/pages/ProfilePage/ProfileStore";
import styles from './OrdersPage.module.scss'
import {roboto} from "@/config/fonts/fonts";

export const ProfilePage = () => {
    const { setCurTab } = useProfileStore()
    useEffect(() => {
        setCurTab("orders")
    }, [])
    return (
        <div>
            <h1 className={`${styles.name} ${roboto.className}`}>Заказы</h1>
        </div>
    )
}