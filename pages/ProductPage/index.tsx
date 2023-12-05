'use client';
import React, {useRef} from 'react';
import styles from './ProductPage.module.scss'
import {Header} from "@/components/Header";
import {roboto} from "@/config/fonts/fonts";
import {Footer} from "@/components/Footer";
import {IProduct} from "@/models/IProduct";
import {useProduct} from "@/hooks/useProducts";
import Image from 'next/image'
import {ChevronDown, Minus, Plus, ShoppingCart} from "lucide-react";

export const ProductPage = ({ params: { id } }: {params: { id: string }}) => {
    const item: IProduct = useProduct(id);
    const quanity = 1;

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
                <h1 className={`${styles.name} ${roboto.className}`}>{item.name}</h1>
                <div className={styles.poster}>
                    <div className={styles.imgWrapper}>
                        <Image
                            className={styles.image}
                            src={item.product_image}
                            width={400}
                            height={400}
                            alt={'Product Image'}
                        />
                    </div>
                    <div className={styles.meta}>
                        <div className={styles.titleBlock}>
                            <p className={styles.titleBlock_title}>{item.name}</p>
                            <div className={styles.detailBlock} onClick={scrollToBlock}>
                                <p>Подробнее</p>
                                <ChevronDown color={'#EEB200'}/>
                            </div>
                        </div>
                        <div className={styles.line}/>
                        <div className={styles.priceBlock}>
                            <p className={styles.priceBlock_dscr}>Цена на сайте</p>
                            <p className={styles.priceBlock_price}>
                                {item.price}₽/<span className={styles.priceBlock_metric}>{item.metric}</span>
                            </p>
                        </div>
                        <div className={styles.btnBlock}>
                            <div className={styles.quanity}>
                                <button className={styles.quanity__btn}><Minus width={16} height={16} color={'#fff'} strokeWidth={'4'}/></button>
                                <p className={styles.quanity__kol}>{quanity}</p>
                                <button className={styles.quanity__btn}><Plus width={16} height={16} color={'#fff'} strokeWidth={'4'}/></button>
                            </div>
                            <button className={styles.btn}>
                                <ShoppingCart width={20} height={20} strokeWidth={3} className={styles.shopCart_img} color={'#ffffff'} />
                                <p>В корзину</p>
                            </button>
                        </div>
                    </div>
                </div>
                <div className={styles.description} ref={targetBlockRef}>
                    <p className={`${styles.description_title} ${roboto.className}`}>Описание</p>
                    <p className={styles.description_text}>
                        {item.description}
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    )
}