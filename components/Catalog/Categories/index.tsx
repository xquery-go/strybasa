'use client'
import { ICategory } from '@/models/ICategory'
import { queryTypes, useQueryStates } from 'next-usequerystate'
import { useEffect, useState } from 'react'
import styles from './Categories.module.scss'

export const Categories = () => {
	const [categories, setCategories] = useState<null | ICategory[]>(null)
	useEffect(() => {
		fetch('http://stroi-basa.ru/api/categories/?format=json')
			.then(res => res.json())
			.then(data => {
				setCategories(data as ICategory[])
				// // console.log(`BREAKPOINT FROM CATEGORIES`, data)
			})
			.catch(() => {})
	}, [])
	const [query, setQuery] = useQueryStates({
		categoryFilter: queryTypes.integer,
		tagFilter: queryTypes.integer,
	})
	return (
		<div>
			{categories ? (
				<select
					name=''
					id=''
					value={String(query.categoryFilter)}
					onChange={e => setQuery({ categoryFilter: Number(e.target.value) })}
					className={styles.select}
				>
					<option value='' className={`${styles.option} ${styles.option_name}`}>
						Все категории
					</option>
					{categories.map((item: ICategory, ind) => {
						return (
							<option key={ind} value={item.id} className={styles.option}>
								{item.name}
							</option>
						)
					})}
				</select>
			) : (
				<></>
			)}
		</div>
	)
}
