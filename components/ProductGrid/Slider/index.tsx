'use client';
import React from 'react';
import styles from './Slider.module.scss'
import {IProduct} from "@/models/IProduct";

import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import {Pagination, Autoplay} from "swiper/modules";
import 'swiper/css/pagination';
import './bulletStyle.scss';
import {snowStormKraft} from "@/config/fonts/fonts";
import Link from 'next/link';
import {SliderEl} from "@/components/ProductGrid/Slider/SliderEl";

export const Slider = ({ products }: { products: IProduct[] }) => {
    const pagination = {
        clickable: true,
        renderBullet: function (index: number, className: string) {
            return '<span class="' + className + '">' + '</span>';
        },
    };
    return (
        <Swiper
            pagination={pagination}
            loop
            // autoplay={{
            //     delay: 5000,
            //     disableOnInteraction: false,
            // }}
            modules={[Pagination, Autoplay]}
            className={styles.container}
        >
            { products.map((item, ind) => {
                return (
                    <SwiperSlide key={ind}>
                        <SliderEl product={item} />
                    </SwiperSlide>
                )})
            }
        </Swiper>
    )
}