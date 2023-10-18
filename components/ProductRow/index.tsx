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

export const ProductRow = ({ products }: { products: IProduct[] }) => {
    return (
        <Swiper
            navigation
            slidesPerView={4}
            spaceBetween={30}
            modules={[Navigation]}
            className={styles.container}
        >
            { products.map((item, ind) => {
                return (
                    <SwiperSlide key={ind}>
                        <ProductCard product={item} />
                    </SwiperSlide>
                )
            }) }
        </Swiper>
    )
}