import React from 'react';
import styles from './HeaderInfo.module.scss'
import Image from 'next/image'
import Link from "next/link";
import {UserCircle2} from "lucide-react";

export const HeaderInfo = () => {
    return (
        <div className={styles.headerInfo}>
            <div className={styles.contacts}>
                <Link href={"#"}>
                    <Image
                        src={'/img/Vk.svg'}
                        width={20}
                        height={20}
                        alt={"Vk"}
                    />
                </Link>
                <Link href={"#"}>
                    <Image
                        src={'/img/Watsapp.svg'}
                        width={20}
                        height={20}
                        alt={"Watsapp"}
                    />
                </Link>
                <Link href={"#"}>+7(911)659-37-37</Link>
                <Link href={"#"}>mail@mail.ru</Link>
            </div>
            <Link href={"#"} className={styles.authorize}>
                <UserCircle2 width={25} height={25} className={styles.authorize_img} />
                <p className={styles.authorize_text}>My account</p>
            </Link>
        </div>
    );
};