'use client';
import React from 'react';
import styles from './SpecialProducts.module.scss'
import {roboto} from "@/config/fonts/fonts";
import {ProductRow} from "@/components/ProductRow";
import {useProducts} from "@/hooks/useProducts";

export const SpecialProducts = () => {
    const {data: specialProducts} = useProducts(5, null)
    return (
        <div className={styles.container}>
            <h2 className={`${styles.name} ${roboto.className}`}>Специальное предложение</h2>
            {specialProducts ? <ProductRow products={specialProducts} /> : <>Загрузка...</>}
        </div>
    )
}