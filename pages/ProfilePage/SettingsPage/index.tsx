'use client';
import React, {useEffect} from 'react';
import styles from './SettingsPage.module.scss'
import useProfileStore from "@/app/ProfileStore";
import {roboto} from "@/config/fonts/fonts";
import {LogOut} from "lucide-react";
import {useUserStore} from "@/app/userStore";
import {useRouter} from "next/navigation";

const SettingsPage = () => {
    const { setCurTab } = useProfileStore()
    const {quitAccount} = useUserStore()
    const router = useRouter()
    useEffect(() => {
        setCurTab("settings")
    }, [setCurTab])
    return (
        <div>
            <title>Настройки | Стройбаза Тиски</title>
            <h1 className={`${styles.name} ${roboto.className}`}>Настройки аккаунта</h1>
            <button
                className={styles.link}
                onClick={() => {
                    quitAccount()
                    router.push('/')
                }}
            >
                <>Выйти из аккаунта</>
                <LogOut color={'#FFFFFF'} width={20} height={20}/>
            </button>
        </div>
    )
}

export default SettingsPage;