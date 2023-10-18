import React from 'react';
import styles from './ProductGrid.module.scss'
import {GridEl} from "@/components/ProductGrid/GridEl";
import {Products} from "@/data/Products";
import {Slider} from "@/components/ProductGrid/Slider";

export const ProductGrid = () => {
    return (
        <div className={styles.grid}>
            <div className={styles.grid_1}>
                <Slider products={Products} />
            </div>
            <div className={styles.grid_2}>
                <GridEl product={Products[0]} />
            </div>
            <div className={styles.grid_3}>
                <GridEl product={Products[0]} />
            </div>
        </div>
    )
}