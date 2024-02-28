import { GridEl } from '@/components/ProductGrid/GridEl'
import { Slider } from '@/components/ProductGrid/Slider'
import { ProductsData } from '@/data/ProductsData'
import { IProduct } from '@/models/IProduct'
import styles from './ProductGrid.module.scss'

export const ProductGrid = ({ products }: { products?: IProduct[] | null }) => {
	const data = products
		? products.slice(0, Math.min(products.length, 5))
		: ProductsData
	const first_product =
		data && data[6]
			? data[6]
			: data[data.length - 2]
	const second_product =
		data && data[7]
			? data[7]
			: data[data.length - 1]

	return (
		<div className={styles.grid}>
			<div className={styles.grid_1}>
				<Slider products={data} />
			</div>
			<div className={styles.grid_2}>
				<GridEl product={first_product} />
			</div>
			<div className={styles.grid_3}>
				<GridEl product={second_product} />
			</div>
		</div>
	)
}
