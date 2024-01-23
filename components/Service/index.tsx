import React from 'react';
import styles from './Service.module.scss'
import {IService} from "@/models/IService";
import Image from 'next/image'

export const Service = ({ item }: { item: IService }) => {
    return (
        <div className={styles.content} id={item.id}>
            <div className={styles.head}>
                <Image
                    className={styles.icon}
                    src={item.icon}
                    width={80}
                    height={80}
                    alt={item.name}
                />
                <p className={styles.name}>{item.name}</p>
            </div>
            <p className={styles.dscr}>{item.dscr}</p>
        </div>
    )
}