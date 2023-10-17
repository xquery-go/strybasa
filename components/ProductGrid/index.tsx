import React from 'react';
import styles from './ProductGrid.module.scss'
import {ProductGridEl} from "@/components/ProductGrid/ProductGridEl";
import {ProductGridSlider} from "@/components/ProductGrid/ProductGridSlider";

export const ProductGrid = () => {
    return (
        <div className={styles.grid}>
            <div className={styles.grid_1}>
                <ProductGridSlider />
            </div>
            <div className={styles.grid_2}>
                <ProductGridEl />
            </div>
            <div className={styles.grid_3}>
                <ProductGridEl />
            </div>
        </div>
    )
}