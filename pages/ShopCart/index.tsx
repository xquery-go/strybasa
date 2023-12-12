'use client';
import React, {useEffect, useState} from 'react';
import styles from './ShopCart.module.scss'
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";
import {roboto} from "@/config/fonts/fonts";
import {ShopProduct} from "@/components/ShopCartProduct";
import {IShopCartProduct} from "@/models/IShopCartProduct";
import {useShopCartStore} from "@/pages/ShopCart/shopCartStore";
import Link from "next/link";

export const ShopCart = ({ token }: { token: string }) => {
    const [ProductsData, setProductsData] = useState<IShopCartProduct[] | null>(null)
    const {getShopCart} = useShopCartStore()

    const fetchData = async () => {
        const data = await getShopCart(token)
        setProductsData(data);
    };
    useEffect(() => {
        fetchData();
    }, [getShopCart, token, ProductsData]);
    return (
        <div className={styles.wrapper}>
            <Header />
            <div className={styles.content}>
                <h1 className={`${styles.name} ${roboto.className}`}>Корзина</h1>
                <div className={styles.shopCart}>
                    <div className={styles.products}>
                       { ProductsData ?
                           ProductsData.map((item: IShopCartProduct) => { return <ShopProduct cartProduct={item} key={item.product.product_id} />}) :
                           <p>Загрузка...</p>
                       }
                    </div>
                    <div className={styles.ordering}>
                        <Link href={'/order'} className={styles.btn}>Перейти к оформлению</Link>
                        <div className={styles.line}></div>
                        <div className={styles.wrap}>
                            <p className={styles.shop_cart_name}>Ваша корзина:</p>
                            <div className={styles.cost}>
                                <p className={styles.cost_name}>
                                    { ProductsData ?
                                        `Товары (${ProductsData.length})` :
                                        'Загрузка...'
                                    }</p>
                                <p className={styles.cost_cost}>
                                    { ProductsData ?
                                        `${ProductsData.length ? ProductsData[0].user_total_price : '0'}₽` :
                                        'Загрузка...'
                                    }</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}