import React from 'react';
import styles from './ProductGridEl.module.scss'
import {IProduct} from "@/models/IProduct";
import {snowStormKraft} from "@/config/fonts/fonts";

export const ProductGridEl = ({ product }: { product?: IProduct }) => {
    return (
        <div className={styles.container}>
            <p className={`${styles.container_content} ${snowStormKraft.className}`}>
                Some<br/>Product
            </p>
        </div>
    )
}