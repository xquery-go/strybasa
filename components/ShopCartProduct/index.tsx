'use client';
import React from 'react';
import styles from './ShopProduct.module.scss'
import Image from 'next/image'
import {Minus, Plus, X} from "lucide-react";
import Link from "next/link";
import {IShopCartProduct} from "@/models/IShopCart";

export const ShopProduct = ({ cartProduct }: { cartProduct: IShopCartProduct }) => {
    const item = cartProduct.product;
    return (
        <div className={styles.content}>
            <button className={styles.close}>
                <X width={25} height={25} color={'#fff'} strokeWidth={'2'}/>
            </button>
            { item && item.product_image ?
                <Image
                    className={styles.image}
                    src={item.product_image}
                    alt={item.name}
                    width={200}
                    height={256}
                /> :
                <Image
                    className={styles.image}
                    src={'/img/ProductImage.jpg'}
                    alt={item.name}
                    width={200}
                    height={256}
                />
            }
            <div className={styles.leftPart}>
                <Link href={`product/${item.product_id}`} className={styles.title}>{item.name}</Link>
                <div className={styles.bottomPart}>
                    <div className={styles.quantity}>
                        <button className={styles.quantity__btn}><Minus width={16} height={16} color={'#fff'} strokeWidth={'4'} className={styles.func_icon}/></button>
                        <p className={styles.quantity__kol}>{cartProduct.amount}</p>
                        <button className={styles.quantity__btn}><Plus width={16} height={16} color={'#fff'} strokeWidth={'4'} className={styles.func_icon}/></button>
                    </div>
                    <p className={styles.price}>{cartProduct.total_price}₽</p>
                </div>
            </div>
        </div>
    )
}