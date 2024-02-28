import { roboto } from '@/config/fonts/fonts'
import { IProduct } from '@/models/IProduct'
import Image from 'next/image'
import Link from 'next/link'
import styles from './GridEl.module.scss'

export const GridEl = ({ product }: { product: IProduct }) => {
	return (
		<div className={styles.container}>
			{product && product.product_image ? (
				<div
					className={styles.image}
					style={{
						background: `#F9F9F9 url(${
							product.product_image
								? `'${product.product_image}'`
								: '/img/ProductImage.jpg'
						}) center center/cover no-repeat`,
					}}

				/>
			) : (
				<Image
					className={styles.image}
					src={'/img/ProductImage.jpg'}
					alt={'Изображение товара'}
					width={170}
					height={170}
				/>
			)}
			<div className={styles.dscr}>
<<<<<<< HEAD
				<p className={`${styles.title} ${roboto.className}`}>{product.name}</p>
				<Link href={`/product/${product.product_id}`} className={styles.btn}>
					Купить сейчас
=======
				<p className={`${styles.title} ${roboto.className}`}>{product && product.name ? product.name : 'Название товара'}</p>
				<Link href={product && product.product_id ? `/product/ ${product.product_id}` : ''} className={styles.btn}>
					Shop Now
>>>>>>> e763ec28510517d96b78cf5e8099ee136075a98c
				</Link>
			</div>
		</div>
	)
}
