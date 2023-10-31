import React from 'react';
import styles from './HeaderInfo.module.scss'
import Image from 'next/image'
import Link from "next/link";
import {User, UserCircle, UserCircle2} from "lucide-react";

export const HeaderInfo = () => {
    return (
        <div className={styles.headerInfo}>
            <div className={styles.contacts}>
                <Link href={"#"}>
                    <Image
                        src={'/img/Vk.svg'}
                        width={18}
                        height={18}
                        alt={"Vk"}
                    />
                </Link>
                <Link href={"#"}>
                    <Image
                        src={'/img/Watsapp.svg'}
                        width={18}
                        height={18}
                        alt={"Watsapp"}
                    />
                </Link>
                <Link href={"#"}>+7(911)659-37-37</Link>
                <Link href={"#"}>mail@mail.ru</Link>
            </div>
            <Link href={"#"} className={styles.authorize}>
                <User width={24} height={24} fill={""} className={styles.authorize_img} />
                <p className={styles.authorize_text}>My account</p>
            </Link>
        </div>
    );
};