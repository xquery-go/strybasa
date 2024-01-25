'use client';
import React, {useEffect, useState} from 'react';
import styles from './SpecialProducts.module.scss'
import {roboto} from "@/config/fonts/fonts";
import {ProductRow} from "@/components/ProductRow";
import {IProduct} from "@/models/IProduct";
import {Filter} from "@/utils/filterProducts";

export const SpecialProducts = () => {
    const [specialProducts, setSpecialProducts] = useState<null | IProduct[]>(null);
    useEffect(() => {
        fetch('http://127.0.0.1/api/products/?format=json')
            .then((res) => res.json())
            .then((data) => {
                data = data?.filter((product: IProduct) => Filter(product, 5, null))
                setSpecialProducts(data as IProduct[])
                console.log(`BREAKPOINT FROM Special Products`, data)
            })
    }, [])
    return (
        <div className={styles.container}>
            <h2 className={`${styles.name} ${roboto.className}`}>Специальное предложение</h2>
            {specialProducts ? <ProductRow products={specialProducts} /> : <>Загрузка...</>}
        </div>
    )
}