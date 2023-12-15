'use client';
import React, {useEffect} from 'react';
import styles from './SettingsPage.module.scss'
import {useProfileStore} from "@/pages/ProfilePage/ProfileStore";

export const SettingsPage = () => {
    const { setCurTab } = useProfileStore()
    useEffect(() => {
        setCurTab("settings")
    }, [])
    return (
        <div>
            Настройки
        </div>
    )
}