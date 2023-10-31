import React from 'react';
import styles from './SpecialProducts.module.scss'
import {roboto} from "@/config/fonts/fonts";
import {ProductsData} from "@/data/ProductsData";
import {ProductRow} from "@/components/ProductRow";

export const SpecialProducts = () => {
    const specialProducts = ProductsData;
    return (
        <div className={styles.container}>
            <h2 className={`${styles.name} ${roboto.className}`}>Специальное предложение</h2>
            <ProductRow products={specialProducts} />
        </div>
    )
}