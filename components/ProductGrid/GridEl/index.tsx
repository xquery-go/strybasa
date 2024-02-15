import { roboto } from '@/config/fonts/fonts'
import { IProduct } from '@/models/IProduct'
import Image from 'next/image'
import Link from 'next/link'
import styles from './GridEl.module.scss'

export const GridEl = ({ product }: { product: IProduct }) => {
	return (
		<div className={styles.container}>
			{product && product.product_image ? (
				<Image
					className={styles.image}
					src={product.product_image}
					alt={product.name}
					width={170}
					height={170}
				/>
			) : (
				<Image
					className={styles.image}
					src={'/img/ProductImage.jpg'}
					alt={product.name}
					width={170}
					height={170}
				/>
			)}
			<div className={styles.dscr}>
				<p className={`${styles.title} ${roboto.className}`}>{product.name}</p>
				<Link href={`/product/${product.product_id}`} className={styles.btn}>
					Shop Now
				</Link>
			</div>
		</div>
	)
}
