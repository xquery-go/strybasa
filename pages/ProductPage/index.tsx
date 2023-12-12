'use client';
import React, {useRef} from 'react';
import styles from './ProductPage.module.scss'
import {Header} from "@/components/Header";
import {roboto} from "@/config/fonts/fonts";
import {Footer} from "@/components/Footer";
import {useProduct} from "@/hooks/useProducts";
import Image from 'next/image'
import {ChevronDown, Minus, Plus, Share2, ShoppingCart} from "lucide-react";
import {useShopCartStore} from "@/pages/ShopCart/shopCartStore";
import {useUserStore} from "@/app/userStore";

export const ProductPage = ({ params: { id } }: {params: { id: number | string }}) => {
    const { data: item } = useProduct(id);
    const { addShopCartProduct } = useShopCartStore()
    const { token } = useUserStore()
    const quantity = 1;
    const targetBlockRef = useRef<HTMLDivElement>(null);
    const scrollToBlock = () => {
        if (targetBlockRef.current) {
            targetBlockRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };
    return (
        <div className={styles.wrapper}>
            <Header />
            <div className={styles.content}>
                <h1 className={`${styles.name} ${roboto.className}`}>{item ? item.name : <>Загрузка...</>}</h1>
                <div className={styles.poster}>
                    <div className={styles.imgWrapper}>
                        <Image
                            className={styles.image}
                            src={item && item.product_image ? item.product_image : '/img/ProductImage.jpg'}
                            width={400}
                            height={400}
                            alt={'Product Image'}
                        />
                    </div>
                    <div className={styles.meta}>
                        <div className={styles.titleBlock}>
                            <p className={styles.titleBlock_title}>{item ? item.name : <>Загрузка...</>}</p>
                            <div className={styles.detailBlock} onClick={scrollToBlock}>
                                <p>Подробнее</p>
                                <ChevronDown color={'#EEB200'}/>
                            </div>
                        </div>
                        <div className={styles.line}/>
                        <div className={styles.priceBlock}>
                            <p className={styles.priceBlock_dscr}>Цена на сайте</p>
                            {item ?
                                <p className={styles.priceBlock_price}>
                                    {item.price}₽{item.metric && <span className={styles.priceBlock_metric}>{item.metric}</span>}
                                </p>
                                :
                                <p className={styles.priceBlock_price}>Загрузка...</p>
                            }
                        </div>
                        <div className={styles.btnBlock}>
                            <div className={styles.quantity}>
                                <button className={styles.quantity__btn}><Minus width={16} height={16} color={'#fff'} strokeWidth={'4'}/></button>
                                <p className={styles.quantity__kol}>{quantity}</p>
                                <button className={styles.quantity__btn}><Plus width={16} height={16} color={'#fff'} strokeWidth={'4'}/></button>
                            </div>
                            {item ?
                            <button className={styles.btn} onClick={() => addShopCartProduct(token, item)}>
                                <ShoppingCart width={20} height={20} strokeWidth={3} className={styles.shopCart_img} color={'#ffffff'} />
                                <p>В корзину</p>
                            </button> : <></>}
                        </div>
                        <div className={styles.share} onClick={() => navigator.clipboard.writeText(window.location.href)}>
                            <Share2 width={15} height={15} color={'#fff'} fill={'#fff'} className={styles.share__icon}/>
                            <p className={styles.share__text}>Поделиться</p>
                        </div>
                    </div>
                </div>
                <div className={styles.description} ref={targetBlockRef}>
                    <p className={`${styles.description_title} ${roboto.className}`}>Описание</p>
                    <p className={styles.description_text}> {item ? item.description : <>Загрузка...</>} </p>
                </div>
            </div>
            <Footer />
        </div>
    )
}