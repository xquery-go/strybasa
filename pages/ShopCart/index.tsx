'use client';
import React, {useEffect, useState} from 'react';
import styles from './ShopCart.module.scss'
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";
import {roboto} from "@/config/fonts/fonts";
import {ShopProduct} from "@/components/ShopCartProduct";
import {IShopCartProduct} from "@/models/IShopCartProduct";
import useShopCartStore from "@/app/shopCartStore";
import {useRouter} from "next/navigation";
import toast from "react-hot-toast";

const ShopCart = ({ token }: { token?: string }) => {
    const router = useRouter()
    const [ProductsData, setProductsData] = useState<IShopCartProduct[] | null>(null)
    const {getShopCart} = useShopCartStore()
    useEffect(() => {
        if(!token)
            router.push('/login');
    }, [token, router])
    const fetchData = async () => {
        if(!token)
            router.push('/login');
        else {
            const data = await getShopCart(token)
            setProductsData(data);
        }
    };
    useEffect(() => {
        fetchData();
    }, [getShopCart, token, ProductsData, fetchData]);

    const handleClick = () => {
        if(ProductsData?.length) router.push('/order')
        else {
            toast.error("Ваша корзина пуста", { position: 'bottom-right' })
        }
    }
    return (
        <div className={styles.wrapper}>
            <Header />
            <div className={styles.content}>
                <h1 className={`${styles.name} ${roboto.className}`}>Корзина</h1>
                <div className={styles.shopCart}>
                    <div className={styles.products}>
                       { ProductsData ?
                           ( ProductsData.length ?
                               ProductsData.map((item: IShopCartProduct) => { return <ShopProduct cartProduct={item} key={item.product.product_id} />}) :
                                   <p>Ваша корзина пуста</p>
                           ) :
                           <p>Загрузка...</p>
                       }
                    </div>
                    <div className={styles.ordering}>
                        <button className={styles.btn} onClick={() => handleClick()}>Перейти к оформлению</button>
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

export default ShopCart;