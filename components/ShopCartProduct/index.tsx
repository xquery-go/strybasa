import React from 'react';
import styles from './ShopProduct.module.scss'
import {IProduct} from "@/models/IProduct";
import Image from 'next/image'
import {Minus, Plus, X} from "lucide-react";
import Link from "next/link";

export const ShopProduct = ({ item }: { item: IProduct }) => {
    const quantity = 1;
    return (
        <div className={styles.content}>
            <button className={styles.close}>
                <X width={25} height={25} color={'#fff'} strokeWidth={'2'}/>
            </button>
            <Image
                className={styles.image}
                src={item.product_image}
                alt={item.name}
                width={200}
                height={256}
            />
            <div className={styles.leftPart}>
                <Link href={`product/${item.product_id}`} className={styles.title}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Link>
                <div className={styles.bottomPart}>
                    <div className={styles.quantity}>
                        <button className={styles.quantity__btn}><Minus width={16} height={16} color={'#fff'} strokeWidth={'4'} className={styles.func_icon}/></button>
                        <p className={styles.quantity__kol}>{quantity}</p>
                        <button className={styles.quantity__btn}><Plus width={16} height={16} color={'#fff'} strokeWidth={'4'} className={styles.func_icon}/></button>
                    </div>
                    <p className={styles.price}>{item.price}₽</p>
                </div>
            </div>
        </div>
    )
}