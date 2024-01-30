'use client';
import React, {useEffect} from 'react';
import styles from './SettingsPage.module.scss'
import useProfileStore from "@/app/ProfileStore";
import {roboto} from "@/config/fonts/fonts";

const SettingsPage = () => {
    const { setCurTab } = useProfileStore()
    useEffect(() => {
        setCurTab("settings")
    }, [setCurTab])
    return (
        <div>
            <title>Настройки | Стройбаза Тиски</title>
            <h1 className={`${styles.name} ${roboto.className}`}>Настройки аккаунта</h1>
        </div>
    )
}

export default SettingsPage;