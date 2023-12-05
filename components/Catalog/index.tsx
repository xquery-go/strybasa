'use client';
import React from 'react';
import styles from './Catalog.module.scss'
import {Categories} from "@/components/Catalog/Categories";
import {Tags} from "@/components/Catalog/Tags";
import {roboto} from "@/config/fonts/fonts";
import {ProductsData} from "@/data/ProductsData";
import {ProductRow} from "@/components/ProductRow";
import {queryTypes, useQueryStates} from "next-usequerystate";
import {useProducts} from "@/hooks/useProducts";
import {IProduct} from "@/models/IProduct";

function Products(products: IProduct[]) {
    const groups: IProduct[][] = [];
    for (let i = 0; i < products.length; i += 6) {
        groups.push(products.slice(i, i + 6));
    }
    return (
        <div className={styles.products}>
            {groups.map((group, index) => (
                <ProductRow key={index} products={group} />
            ))}
        </div>
    );
}

export const Catalog = () => {
    const [query, setQuery] = useQueryStates({
        categoryFilter: queryTypes.integer,
        tagFilter: queryTypes.integer
    });
    const { data: products } = useProducts(query.categoryFilter, query.tagFilter)
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <Categories />
                <h2 className={`${styles.header_name} ${roboto.className}`}>Наши Товары</h2>
                <div className={styles.funcPart}>
                    <Tags />
                </div>
            </div>
            { products && products.length ? Products(products) : <p>К сожалению нет товаров с заданными фильтрами</p>}
        </div>
    )
}