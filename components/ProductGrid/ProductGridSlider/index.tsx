'use client';
import React from 'react';
import styles from './ProductGridSlider.module.scss'
import {IProduct} from "@/models/IProduct";

import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import {Pagination} from "swiper/modules";
import 'swiper/css/pagination';
import './bulletStyle.scss';

export const ProductGridSlider = ({ products }: { products?: IProduct[] }) => {
    const pagination = {
        clickable: true,
        renderBullet: function (index: number, className: string) {
            return '<span class="' + className + '">' + '</span>';
        },
    };
    return (
        <Swiper
            pagination={pagination}
            modules={[Pagination]}
            className={styles.container}
        >
            <SwiperSlide>
                Product1
            </SwiperSlide>
            <SwiperSlide>
                Product2
            </SwiperSlide>
            <SwiperSlide>
                Product3
            </SwiperSlide>
        </Swiper>
    )
}