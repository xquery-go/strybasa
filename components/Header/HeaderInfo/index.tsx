import React from 'react';
import styles from './HeaderInfo.module.scss'
import Image from 'next/image'
import Link from "next/link";
import {User, UserCircle, UserCircle2} from "lucide-react";

export const HeaderInfo = () => {
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
                    <Link href={"#"} className={styles.link}>+7(911)659-37-37</Link>
                    <Link href={"#"} className={styles.link}>mail@mail.ru</Link>
                </div>
                <Link href={"#"} className={`${styles.authorize} ${styles.link}`}>
                    <User width={20} height={20} fill={""} className={styles.authorize_img} />
                    <p className={styles.authorize_text}>My account</p>
                </Link>
            </div>
        </div>
    );
};