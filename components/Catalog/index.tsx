import React from 'react';
import styles from './Catalog.module.scss'
import {Categories} from "@/components/Catalog/Categories";
import {Tags} from "@/components/Catalog/Tags";

export const Catalog = () => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <Categories />
                <h2 className={styles.header_name}>Наши Товары</h2>
                <div className={styles.funcPart}>
                    <Tags />
                    
                </div>
            </div>
        </div>
    )
}