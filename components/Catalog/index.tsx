'use client';
import React, {useEffect, useState} from 'react';
import styles from './Catalog.module.scss'
import {Categories} from "@/components/Catalog/Categories";
import {Tags} from "@/components/Catalog/Tags";
import {roboto} from "@/config/fonts/fonts";
import {ProductRow} from "@/components/ProductRow";
import {queryTypes, useQueryStates} from "next-usequerystate";
import {IProduct} from "@/models/IProduct";
import {Filter} from "@/utils/filterProducts";

function Products(products: IProduct[]) {
    const groups: IProduct[][] = [];
    for (let i = 0; i < products.length; i += 6) groups.push(products.slice(i, i + 6));
    return (
        <div className={styles.products}>
            {groups.map((group, index) => (
                <ProductRow key={index} products={group} />
            ))}
        </div>
    );
}

export const Catalog = () => {
    const [query] = useQueryStates({
        categoryFilter: queryTypes.integer,
        tagFilter: queryTypes.integer
    });
    const [products, setProducts] = useState<null | IProduct[]>(null);
    useEffect(() => {
        fetch('http://127.0.0.1/api/products/?format=json')
            .then((res) => res.json())
            .then((data) => {
                data = data?.filter((product: IProduct) => Filter(product, query.categoryFilter, query.tagFilter))
                setProducts(data as IProduct[])
                console.log(`BREAKPOINT FROM Catalog`, data)
            })
    }, [])
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