import { roboto } from '@/config/fonts/fonts'
import { IProduct } from '@/models/IProduct'
import Image from 'next/image'
import Link from 'next/link'
import styles from './SliderEl.module.scss'

export const SliderEl = ({ product }: { product: IProduct }) => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.slider_el}>
				<p className={styles.slider_el_p}>
					Покупайте с уверенностью,
					<br />
					стройте с удовольствием!
				</p>
				<p className={`${styles.slider_el_name} ${roboto.className}`}>
					{product.name}
				</p>
				<p className={styles.slider_el_dscr}>{product.description}</p>
				<Link
					href={`/product/${product.product_id}`}
					className={styles.slider_el_btn}
				>
					Shop Now
				</Link>
			</div>
			{product && product.product_image ? (
				<Image
					className={styles.image}
					src={product.product_image}
					alt={product.name}
					width={300}
					height={300}
				/>
			) : (
				<Image
					className={styles.image}
					src={'/img/ProductImage.jpg'}
					alt={product.name}
					width={300}
					height={300}
				/>
			)}
		</div>
	)
}
