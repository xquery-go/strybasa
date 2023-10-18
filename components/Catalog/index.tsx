import React from 'react';
import styles from './Catalog.module.scss'
import {Categories} from "@/components/Catalog/Categories";
import {Tags} from "@/components/Catalog/Tags";
import {snowStormKraft} from "@/config/fonts/fonts";
import {ProductsData} from "@/data/ProductsData";
import {ProductRow} from "@/components/ProductRow";

export const Catalog = () => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <Categories />
                <h2 className={`${styles.header_name} ${snowStormKraft.className}`}>Наши Товары</h2>
                <div className={styles.funcPart}>
                    <Tags />
                </div>
            </div>
            <div className={styles.products}>
                <ProductRow products={ProductsData}/>
                <ProductRow products={ProductsData}/>
            </div>
        </div>
    )
}