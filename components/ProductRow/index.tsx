'use client';
import React from 'react';
import styles from './ProductRow.module.scss'
import './sliderArrows.scss'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import {IProduct} from "@/models/IProduct";
import {ProductCard} from "@/components/ProductCard";
import {useUserStore} from "@/app/userStore";

export const ProductRow = ({ products }: { products: IProduct[] }) => {
    const { token } = useUserStore()
    return (
        <>
            {products.length ?
                <Swiper
                    navigation
                    slidesPerView={4}
                    spaceBetween={40}
                    modules={[Navigation]}
                    className={styles.container}
                >
                    { products.map((item, ind) => {
                        return (
                            <SwiperSlide key={ind}>
                                <ProductCard product={item} token={token} />
                            </SwiperSlide>
                        )
                    }) }
                </Swiper> :
                <p>К сожалению, сейчас отсутствуют такие товары</p>
            }
        </>
    )
}