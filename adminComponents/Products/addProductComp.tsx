'use client'
import { addProduct } from '@/adminComponents/Products/ProductQueries'
import { useUserStore } from '@/app/userStore'
import { JsonViewer } from '@textea/json-viewer'
import { Button, Input } from 'antd'
import { useFormik } from 'formik'
import Image from 'next/image'
import { useState } from 'react'
import styles from './ProductsQueries.module.scss'

export interface initialFormikValues {
	name: string
	description: string
	price: string
	quantity: string
	product_image: string
	tags: string
	categories: string
}

export const AddProductComp = () => {
	const { token } = useUserStore()
	const [res, setRes] = useState<Object | null | undefined>(null)
	const [base64, setBase64] = useState<null | string>(null)
	const formik = useFormik<initialFormikValues>({
		initialValues: {
			name: '',
			description: '',
			price: '',
			quantity: '',
			product_image: '',
			tags: '',
			categories: '',
		},
		onSubmit: async values => {
			const data = await addProduct(token, values)
			// console.log('', data)
			setRes(data as Object)
		},
	})
	const handleInputFile = (e: any) => {
		const file = e.target.files[0]
		let reader = new FileReader()
		reader.readAsDataURL(file)
		reader.onload = () => {
			if (reader.result) {
				setBase64(reader.result.toString())
				formik.values.product_image = reader.result.toString()
			}
		}
	}
	return (
		<form className={styles.wrapper} onSubmit={formik.handleSubmit}>
			<p className={styles.url}>{`/api/products/ (post)`} </p>
			<div className={styles.params}>
				<div className={styles.field}>
					<label htmlFor='name' className={styles.label}>
						* Название товара
					</label>
					<Input
						className={styles.input}
						placeholder={'Название товара'}
						name={'name'}
						value={formik.values.name}
						onChange={formik.handleChange}
					/>
				</div>
				<div className={styles.field}>
					<label htmlFor='description' className={styles.label}>
						* Описание
					</label>
					<Input
						className={styles.input}
						placeholder={'Описание товара'}
						name={'description'}
						onChange={formik.handleChange}
					/>
				</div>
				<div className={styles.field}>
					<label htmlFor='price' className={styles.label}>
						* Цена товара
					</label>
					<Input
						className={styles.input}
						placeholder={'Цена товара'}
						name={'price'}
						value={formik.values.price}
						onChange={formik.handleChange}
					/>
				</div>
				<div className={styles.field}>
					<label htmlFor='quantity' className={styles.label}>
						* Количество товара на складе
					</label>
					<Input
						className={styles.input}
						placeholder={'Количество товара на складе'}
						name={'quantity'}
						value={formik.values.quantity}
						onChange={formik.handleChange}
					/>
				</div>
				<div className={styles.field} id={styles.image_field}>
					<label htmlFor='product_image' className={styles.label}>
						* Изображение товара
					</label>
					<input
						className={styles.input}
						placeholder={'Загрузите изображение'}
						name={'product_image'}
						type={'file'}
						onChange={e => handleInputFile(e)}
					/>
					{base64 ? (
						<Image
							src={base64}
							alt={'Картинка не прогружается, проверьте файл'}
							width={100}
							height={100}
						/>
					) : (
						<></>
					)}
				</div>
				<div className={styles.field}>
					<label htmlFor='tags' className={styles.label}>
						id тэгов через пробел
					</label>
					<Input
						className={styles.input}
						placeholder={'id тэгов через пробел'}
						name={'tags'}
						value={formik.values.tags}
						onChange={formik.handleChange}
					/>
				</div>
				<div className={styles.field}>
					<label htmlFor='categories' className={styles.label}>
						id категорий через пробел
					</label>
					<Input
						className={styles.input}
						placeholder={'id категорий через пробел'}
						name={'categories'}
						value={formik.values.categories}
						onChange={formik.handleChange}
					/>
				</div>
			</div>
			<Button type='primary' htmlType='submit'>
				Сделать запрос
			</Button>
			{res ? (
				<div className={styles.response}>
					<p className={styles.response_title}>Ответ сервера</p>
					<JsonViewer
						enableClipboard={false}
						displayDataTypes={false}
						value={res ? res : {}}
					/>
				</div>
			) : (
				<></>
			)}
		</form>
	)
}
