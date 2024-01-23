'use client';
import React, {useEffect} from 'react';
import styles from './SettingsPage.module.scss'
import {useProfileStore} from "@/pages/ProfilePage/ProfileStore";
import {roboto} from "@/config/fonts/fonts";

export const SettingsPage = () => {
    const { setCurTab } = useProfileStore()
    useEffect(() => {
        setCurTab("settings")
    }, [])
    return (
        <div>
            <head>
                <title>Настройки | Стройбаза Тиски</title>
            </head>
            <h1 className={`${styles.name} ${roboto.className}`}>Настройки аккаунта</h1>
        </div>
    )
}