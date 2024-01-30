'use client';
import React, {useEffect, useRef, useState} from 'react';
import styles from './ProductPage.module.scss'
import {Header} from "@/components/Header";
import {roboto} from "@/config/fonts/fonts";
import {Footer} from "@/components/Footer";
import Image from 'next/image'
import {AlertTriangle, ChevronDown, ClipboardCheck, Minus, Plus, Share2, ShoppingCart} from "lucide-react";
import useShopCartStore from "@/pages/ShopCart/shopCartStore";
import {useUserStore} from "@/app/userStore";
import {IProduct} from "@/models/IProduct";
import toast from "react-hot-toast";
import {useRouter} from "next/navigation";

const ProductPage = ({ params: { id } }: {params: { id: number | string }}) => {
    const [quantity, setQuantity] = useState<number>(0)
    const { getShopCartProductQuantity } = useShopCartStore()
    const [item, setItem] = useState<null | IProduct>(null);
    const router = useRouter()
    useEffect(() => {
        if(!id) router.push('/');
        fetch(`http://127.0.0.1/api/products/${String(id)}/?format=json`)
            .then((res) => res.json())
            .then((data) => {
                setItem(data as IProduct)
                // console.log(`BREAKPOINT FROM Product`, data)
            })
    }, [])
    useEffect(() => {
        const fetchData = async () => {
            if(token && item && item.product_id) {
                const data = await  getShopCartProductQuantity(token, item.product_id)
                setQuantity(data);
            }
        };
        fetchData()
    })
    const { token } = useUserStore()
    const {changeQuantityShopCartProduct} = useShopCartStore();
    const targetBlockRef = useRef<HTMLDivElement>(null);

    const scrollToBlock = () => {
        if (targetBlockRef.current) {
            targetBlockRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };
    const handleMinus = (item : IProduct) => {
        if(token) {
            setQuantity((prev) => (prev - 1))
            changeQuantityShopCartProduct(token, item, -1)
        }
        else {
            toast(
                "В начале войдите в аккаунт", {
                    position: "bottom-right",
                    icon: <AlertTriangle color={"#000"} width={15} height={15} />
                })
        }
    }
    const handlePlus = (item: IProduct) => {
        if(token) {
            setQuantity((prev) => (prev + 1))
            changeQuantityShopCartProduct(token, item, 1)
        } else {
            toast(
                "В начале войдите в аккаунт", {
                    position: "bottom-right",
                    icon: <AlertTriangle color={"#000"} width={15} height={15} />
                })
        }
    }
    return (
        <div className={styles.wrapper}>
            <Header />
            <title>Товар | Стройбаза Тиски</title>
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
                            { item && (quantity || quantity == 0) ?
                                <div className={styles.quantity}>
                                    <button
                                        className={styles.quantity__btn}
                                        onClick={() => handleMinus(item)}
                                        disabled={quantity == 0}
                                    >
                                        <Minus width={16} height={16} color={'#000'} strokeWidth={'4'}/>
                                    </button>
                                    <p className={styles.quantity__kol}>{quantity}</p>
                                    <button
                                        className={styles.quantity__btn}
                                        onClick={() => handlePlus(item)}
                                    >
                                        <Plus width={16} height={16} color={'#000'} strokeWidth={'4'}/>
                                    </button>
                                </div> :
                                <p className={styles.quantity__kol}>Загрузка...</p>
                            }
                        </div>
                        <div className={styles.share} onClick={() => {
                            navigator.clipboard.writeText(window.location.href)

                            toast(
                                "Успешно скопировано", {
                                    position: "bottom-right",
                                    icon: <ClipboardCheck color={"#2eb025"} width={15} height={15} />
                                })
                        }}>
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

export default ProductPage;