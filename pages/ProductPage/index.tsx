'use client';
import React, {useEffect, useRef} from 'react';
import styles from './ProductPage.module.scss'
import {Header} from "@/components/Header";
import {roboto} from "@/config/fonts/fonts";
import {Footer} from "@/components/Footer";
import {IProduct} from "@/models/IProduct";
import {useProduct} from "@/hooks/useProducts";
import Image from 'next/image'
import {ChevronDown, Minus, Plus, ShoppingCart} from "lucide-react";

export const ProductPage = ({ params: { id } }: {params: { id: number | string }}) => {
    const { data: item } = useProduct(id);
    const quantity = 1;
    useEffect(() =>{
        console.log(`BREAKPOINT from productPage-${id}`, item)
    }, [item]);

    // const targetBlockRef = useRef<HTMLDivElement>(null);
    // const scrollToBlock = () => {
    //     if (targetBlockRef.current) {
    //         targetBlockRef.current.scrollIntoView({ behavior: "smooth" });
    //     }
    // };
    return (
        <div className={styles.wrapper}>
            <Header />
            <div className={styles.content}>
                {item ? <h1 className={`${styles.name} ${roboto.className}`}>{item.name}</h1> : <>Загрузка...</>}
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
                            {item ? <p className={styles.titleBlock_title}>{item.name}</p> : <>Загрузка...</>}
                            <div className={styles.detailBlock} /*onClick={scrollToBlock}*/>
                                <p>Подробнее</p>
                                <ChevronDown color={'#EEB200'}/>
                            </div>
                        </div>
                        <div className={styles.line}/>
                        <div className={styles.priceBlock}>
                            <p className={styles.priceBlock_dscr}>Цена на сайте</p>
                            {item ?
                                <p className={styles.priceBlock_price}>
                                    {item.price}₽/<span className={styles.priceBlock_metric}>{item.metric}</span>
                                </p>
                                : <>Загрузка...</>
                            }
                        </div>
                        <div className={styles.btnBlock}>
                            <div className={styles.quantity}>
                                <button className={styles.quantity__btn}><Minus width={16} height={16} color={'#fff'} strokeWidth={'4'}/></button>
                                <p className={styles.quantity__kol}>{quantity}</p>
                                <button className={styles.quantity__btn}><Plus width={16} height={16} color={'#fff'} strokeWidth={'4'}/></button>
                            </div>
                            <button className={styles.btn}>
                                <ShoppingCart width={20} height={20} strokeWidth={3} className={styles.shopCart_img} color={'#ffffff'} />
                                <p>В корзину</p>
                            </button>
                        </div>
                    </div>
                </div>
                <div className={styles.description} /*ref={targetBlockRef}*/>
                    <p className={`${styles.description_title} ${roboto.className}`}>Описание</p>
                    {item ?
                        <p className={styles.description_text}>
                            {item.description}
                        </p>
                        : <>Загрузка...</>
                    }
                </div>
            </div>
            <Footer />
        </div>
    )
}