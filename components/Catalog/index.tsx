'use client'
import { Categories } from '@/components/Catalog/Categories'
import { Tags } from '@/components/Catalog/Tags'
import { ProductRow } from '@/components/ProductRow'
import { roboto } from '@/config/fonts/fonts'
import { IProduct } from '@/models/IProduct'
import { Filter } from '@/utils/filterProducts'
import { queryTypes, useQueryStates } from 'next-usequerystate'
import { useEffect, useState } from 'react'
import styles from './Catalog.module.scss'

function Products(products: IProduct[]) {
	const groups: IProduct[][] = []
	for (let i = 0; i < products.length; i += 6)
		groups.push(products.slice(i, i + 6))
	return (
		<div className={styles.products}>
			{groups.map((group, index) => (
				<ProductRow key={index} products={group} />
			))}
		</div>
	)
}

export const Catalog = () => {
	const [query] = useQueryStates({
		categoryFilter: queryTypes.integer,
		tagFilter: queryTypes.integer,
	})
	const [products, setProducts] = useState<null | IProduct[]>(null)
	useEffect(() => {
		fetch('http://stroi-basa.ru/api/products/?format=json')
			.then(res => res.json())
			.then(data => {
				setProducts(data as IProduct[])
				// console.log(`BREAKPOINT FROM Catalog`, data)
			})
			.catch(() => {})
	}, [])
	return (
		<div className={styles.container}>
			<h2 className={`${styles.header_name} ${roboto.className}`}>
				Наши Товары
			</h2>
			<div className={styles.header}>
				<Categories />
				<div className={styles.funcPart}>
					<Tags />
				</div>
			</div>
			{products && products.length ? (
				Products(
					products?.filter((product: IProduct) =>
						Filter(product, query.categoryFilter, query.tagFilter)
					)
				)
			) : (
				<p>К сожалению нет товаров с заданными фильтрами</p>
			)}
		</div>
	)
}
