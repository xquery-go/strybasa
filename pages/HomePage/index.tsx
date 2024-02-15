'use client'
import { Catalog } from '@/components/Catalog'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { ProductGrid } from '@/components/ProductGrid'
import { SpecialProducts } from '@/components/SpecialProducts'
import { IProduct } from '@/models/IProduct'
import { useEffect, useState } from 'react'
import styles from './HomePage.module.scss'

const HomePage = () => {
	const [products, setProducts] = useState<null | IProduct[]>(null)
	useEffect(() => {
		fetch('http://127.0.0.1/api/products/?format=json')
			.then(res => res.json())
			.then(data => {
				setProducts(data as IProduct[])
				// console.log(`BREAKPOINT FROM Catalog`, data)
			})
			.catch(() => {})
	}, [])
	return (
		<div className={styles.wrapper}>
			<title>Главная | Стройбаза Тиски</title>
			<Header />
			<section className={styles.section}>
				<ProductGrid products={products} />
			</section>
			<section className={styles.section}>
				<SpecialProducts />
			</section>
			<section className={styles.section}>
				<Catalog />
			</section>
			<Footer />
		</div>
	)
}

export default HomePage
