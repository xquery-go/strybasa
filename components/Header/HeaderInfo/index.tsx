'use client';
import React from 'react';
import styles from './HeaderInfo.module.scss'
import Image from 'next/image'
import Link from "next/link";
import {User} from "lucide-react";
import {useUserStore} from "@/app/userStore";
import {IUser} from "@/models/IUser";

export const HeaderInfo = () => {
    const {token, curUser} = useUserStore();
    return (
        <div className={styles.wrapper}>
            <div className={styles.headerInfo}>
                <div className={styles.contacts}>
                    <Link href={"https://vk.com/tiskikotlas"} className={styles.link}>
                        <Image
                            src={'/img/Vk.svg'}
                            width={16}
                            height={16}
                            alt={"Vk"}
                        />
                    </Link>
                    <Link href={"tel:+79116593737"} className={styles.link}>+7(911)659-37-37</Link>
                    <Link href={`mailto:Torg2023@yandex.ru`} className={styles.link}>Torg2023@yandex.ru</Link>
                </div>
                <Link href={token ? "/profile" : "/registration"} className={`${styles.authorize} ${styles.link}`}>
                    <User width={20} height={20} fill={""} className={styles.authorize_img} />
                    <p className={styles.authorize_text}>{curUser && token && curUser.username ? curUser.username : 'Мой акккаунт'}</p>
                </Link>
            </div>
        </div>
    );
};