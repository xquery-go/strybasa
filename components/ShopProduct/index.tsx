import React from 'react';
import styles from './ShopProduct.module.scss'
import {IProduct} from "@/models/IProduct";
import Image from 'next/image'

export const ShopProduct = ({ item }: { item: IProduct }) => {
    return (
        <div className={styles.content}>
            <Image
                className={styles.image}
                src={item.product_image}
                alt={item.name}
                width={240}
                height={256}
            />
            <div className={styles.leftPart}>
                <p className={styles.title}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <div className={styles.bottomPart}>
                    <p className={styles.price}>{item.price}₽</p>
                </div>
            </div>
        </div>
    )
}