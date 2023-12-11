'use client';
import React from 'react';
import styles from './HeaderInfo.module.scss'
import Image from 'next/image'
import Link from "next/link";
import {User} from "lucide-react";
import {useAuthorizeStore} from "@/app/userStore";

export const HeaderInfo = () => {
    const {curUser} = useAuthorizeStore()
    return (
        <div className={styles.wrapper}>
            <div className={styles.headerInfo}>
                <div className={styles.contacts}>
                    <Link href={"#"} className={styles.link}>
                        <Image
                            src={'/img/Vk.svg'}
                            width={16}
                            height={16}
                            alt={"Vk"}
                        />
                    </Link>
                    <Link href={"#"} >
                        <Image
                            src={'/img/Watsapp.svg'}
                            width={16}
                            height={16}
                            alt={"Watsapp"}
                        />
                    </Link>
                    <Link href={"tel:+79116593737"} className={styles.link}>+7(911)659-37-37</Link>
                    <Link href={`mailto:mail@mail.ru`} className={styles.link}>mail@mail.ru</Link>
                </div>
                <Link href={"/registration"} className={`${styles.authorize} ${styles.link}`}>
                    <User width={20} height={20} fill={""} className={styles.authorize_img} />
                    <p className={styles.authorize_text}>{!curUser ? 'My account' : curUser.username}</p>
                </Link>
            </div>
        </div>
    );
};