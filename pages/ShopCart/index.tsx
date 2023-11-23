import React from 'react';
import styles from './ShopCart.module.scss'
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";
import {roboto, robotoMono} from "@/config/fonts/fonts";
import {ProductsData} from "@/data/ProductsData";
import {IProduct} from "@/models/IProduct";
import {ShopProduct} from "@/components/ShopCartProduct";

export const ShopCart = () => {
    let summ = 0;
    ProductsData.map(item => summ += item.price);
    return (
        <div className={styles.wrapper}>
            <Header />
            <div className={styles.content}>
                <h1 className={`${styles.name} ${roboto.className}`}>Корзина</h1>
                <div className={styles.shopCart}>
                    <div className={styles.products}>
                       { ProductsData.map((item: IProduct) => { return <ShopProduct item={item} key={item.product_id} />}) }
                    </div>
                    <div className={styles.ordering}>
                        <button className={styles.btn}>Перейти к оформлению</button>
                        <div className={styles.line}></div>
                        <div className={styles.wrap}>
                            <p className={styles.shop_cart_name}>Ваша корзина:</p>
                            <div className={styles.cost}>
                                <p className={styles.cost_name}>Товары ({ProductsData.length})</p>
                                <p className={styles.cost_cost}>{summ}₽</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}