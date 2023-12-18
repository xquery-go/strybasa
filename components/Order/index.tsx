import React from 'react';
import styles from './Order.module.scss'
import {IOrder} from "@/models/IOrder";
import {IShopCartProduct} from "@/models/IShopCartProduct";
import Image from 'next/image'
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';
import Link from "next/link";

export const Order = ({ order }: { order: IOrder }) => {
    return (
        <div className={styles.content}>
            <div className={styles.topPart}>
                <div className={styles.topLeftPart}>
                    <p className={styles.date}>Заказ от {order.order_time.substr(0, order.order_time.indexOf(' '))}</p>
                    <div className={styles.status}>{order.status}</div>
                </div>
                <p className={styles.price}>{order.to_pay}₽</p>
            </div>
            { order.items ?
                <div className={styles.swiperWrapper}>
                    <Swiper
                        slidesPerView={'auto'}
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
                        className={styles.items}
                    >
                        {order.items.map((item: IShopCartProduct) => {
                            return (
                                <SwiperSlide className={styles.item} key={item.product.product_id}>
                                    <Link href={`/product/${item.product.product_id}`}>
                                        { item.product.product_image ?
                                            <Image
                                                className={styles.item_image}
                                                src={item.product.product_image}
                                                height={160}
                                                width={160}
                                                alt={'item'}
                                            /> :
                                            <Image
                                                className={styles.item_image}
                                                src={'/img/ProductImage.jpg'}
                                                height={160}
                                                width={170}
                                                alt={'item'}
                                            />
                                        }
                                        <p className={styles.item_name}>{item.product.name ? item.product.name : 'Название товара'}</p>
                                    </Link>
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                </div> :
                <p>Нет товаров</p>
            }
        </div>
    )
}