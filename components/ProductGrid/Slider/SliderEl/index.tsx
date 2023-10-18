import React from 'react';
import styles from './SliderEl.module.scss'
import {IProduct} from "@/models/IProduct";
import {snowStormKraft} from "@/config/fonts/fonts";
import Link from "next/link";

export const SliderEl = ({ product }: { product: IProduct }) => {
    return (
        <div className={styles.slider_el}>
            <p className={styles.slider_el_p}>buy from us & get your</p>
            <p className={`${styles.slider_el_name} ${snowStormKraft.className}`}>{ product.name }</p>
            <p className={styles.slider_el_dscr}>{ product.description }</p>
            <Link href={`/product/${product.id}`} className={styles.slider_el_btn}>Shop Now</Link>
        </div>
    )
}