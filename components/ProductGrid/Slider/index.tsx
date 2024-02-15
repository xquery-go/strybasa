'use client'
import { IProduct } from '@/models/IProduct'
import styles from './Slider.module.scss'

import { SliderEl } from '@/components/ProductGrid/Slider/SliderEl'
import 'swiper/css'
import 'swiper/css/pagination'
import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import './bulletStyle.scss'

export const Slider = ({ products }: { products: IProduct[] }) => {
	const pagination = {
		clickable: true,
		renderBullet: function (index: number, className: string) {
			return '<span class="' + className + '">' + '</span>'
		},
	}
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
			{products.map((item, ind) => {
				return (
					<SwiperSlide key={ind}>
						<SliderEl product={item} />
					</SwiperSlide>
				)
			})}
		</Swiper>
	)
}
